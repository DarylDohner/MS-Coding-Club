func fibonacci(number: Int) -> (Int) {
    if number <= 1 {
        return number
    } else {
        return fibonacci(number: number - 1) + fibonacci(number: number - 2)
    }
}

var fibNumber = fibonacci(number: 10)
print("The 10th Fibonacci number is: \(fibNumber)")
