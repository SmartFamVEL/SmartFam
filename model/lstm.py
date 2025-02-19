import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import random
from scipy.interpolate import interp1d


file_path = "sample_dataset_with_dates_fixed.xlsx"
df = pd.read_excel(file_path, parse_dates=["Date"])


df["Income"] = df.apply(lambda x: x["Amount"] if x["Type"] == "Credit" else 0, axis=1)
df["Expenses"] = df.apply(lambda x: x["Amount"] if x["Type"] == "Debit" else 0, axis=1)


df_grouped = df.groupby("Date")[["Income", "Expenses"]].sum().reset_index()


scaler = MinMaxScaler()
scaled_data = scaler.fit_transform(df_grouped[["Income", "Expenses"]])


sequence_length = 10
X, y = [], []
for i in range(len(scaled_data) - sequence_length):
    X.append(scaled_data[i:i + sequence_length])
    y.append(scaled_data[i + sequence_length])

X, y = np.array(X), np.array(y)


train_size = int(0.8 * len(X))
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]


model = Sequential([
    LSTM(50, return_sequences=True, input_shape=(sequence_length, 2)),
    Dropout(0.2),
    LSTM(50, return_sequences=False),
    Dropout(0.2),
    Dense(2)  
])

model.compile(optimizer="adam", loss="mean_squared_error")


history = model.fit(X_train, y_train, epochs=50, batch_size=8, validation_data=(X_test, y_test), verbose=1)


predictions = model.predict(X_test)


predicted_values = scaler.inverse_transform(predictions)
actual_values = scaler.inverse_transform(y_test)


x_actual = np.linspace(0, len(actual_values), num=len(actual_values))
x_smooth = np.linspace(0, len(actual_values), num=len(actual_values) * 5)


actual_interp = interp1d(x_actual, actual_values[:, 1], kind='cubic')
predicted_interp = interp1d(x_actual, predicted_values[:, 1], kind='cubic')

y_actual_smooth = actual_interp(x_smooth)
y_predicted_smooth = predicted_interp(x_smooth)

fig, ax = plt.subplots(figsize=(12, 6))
ax.set_title("Actual vs Predicted Expenses", fontsize=14)
ax.set_xlabel("Date", fontsize=12)
ax.set_ylabel("Expenses", fontsize=12)


line_actual, = ax.plot([], [], label="Actual Expenses", color="blue", linewidth=2)
line_predicted, = ax.plot([], [], label="Predicted Expenses", color="green", linestyle="dashed", linewidth=2)


ax.set_xlim(0, len(actual_values) - 1)
ax.set_ylim(min(min(y_actual_smooth), min(y_predicted_smooth)) * 0.9,
            max(max(y_actual_smooth), max(y_predicted_smooth)) * 1.1)

ax.legend()


def update(frame):
    line_actual.set_data(x_smooth[:frame], y_actual_smooth[:frame])
    line_predicted.set_data(x_smooth[:frame], y_predicted_smooth[:frame])

    return line_actual, line_predicted


ani = animation.FuncAnimation(fig, update, frames=len(x_smooth), interval=200, blit=False, repeat=False)

plt.show()


total_income = df_grouped["Income"].sum()
total_expenses = df_grouped["Expenses"].sum()


ideal_savings = total_income * 0.2


if total_expenses > total_income:
    expense_suggestion = "You are spending more than your income. Consider reducing unnecessary expenses."
else:
    expense_suggestion = "Your expenses are within your income. Keep tracking and stay disciplined."


investment_suggestions = [
    "Consider investing 10% of your monthly income in mutual funds for steady growth.",
    "Explore stock market investments for potential high returns. Start with 10% of your income.",
    "Consider putting 15% of your monthly income into retirement plans like PPF or EPF for long-term security.",
    "Invest in high-interest savings accounts or Fixed Deposits for a risk-free return on 5-10% of your income.",
    "Diversify your investments by allocating 10% of your income to gold, bonds, or other secure assets."
]
investment_suggestion = random.choice(investment_suggestions)


print("\nFinancial Suggestions and Budget Plan:")
print(f"Total Income: ₹{total_income:.2f}")
print(f"Total Expenses: ₹{total_expenses:.2f}")
print(f"Ideal Savings (20% of income): ₹{ideal_savings:.2f}")
print(expense_suggestion)
print(f"Investment Suggestion: {investment_suggestion}")
