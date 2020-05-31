# -*- coding: utf-8 -*-
import Pyro.util
import Pyro.core
Pyro.core.initClient()
calc = Pyro.core.getProxyForURI("PYRONAME://simple")

print("Selecione a operação.")
print("1.Adição")
print("2.Subtração")
print("3.Multiplicação")
print("4.Divisão")
print("5.Potenciação")

while True:
    choiceList = [1,2,3,4,5]
    choice = int(input("Digite uma opção(1/2/3/4/5): "))
    if choice in choiceList:
        num1 = float(input("Primeiro número: "))
        num2 = float(input("Segundo número: "))

        if choice == 1:
            print(num1, "+", num2, "=", calc.add(num1, num2))

        elif choice == 2:
            print(num1, "-", num2, "=", calc.sub(num1, num2))

        elif choice == 3:
            print(num1, "*", num2, "=", calc.mult(num1, num2))

        elif choice == 4:
            print(num1, "/", num2, "=", calc.div(num1, num2))
        elif choice == 5:
            print(num1, '^', num2, "=", calc.pow(num1, num2))
        break   
    else:
        print("Operação inválida")
        