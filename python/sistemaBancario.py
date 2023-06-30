'''

Neste projeto, você terá a oportunidade de criar um Sistema Bancário em Python.
O objetivo é implementar três operações essenciais: depósito, saque e extrato.
O sistema será desenvolvido para um banco que busca monetizar suas operações.
Durante o desafio, você terá a chance de aplicar seus conhecimentos em 
programação Python e criar um sistema funcional que simule as operações 
bancárias. Prepare-se para aprimorar suas habilidades e demonstrar sua
capacidade de desenvolver soluções práticas e eficientes.

'''
class Banco:
    def __init__(self):
        self.saldo = 0

    def deposito(self, valor):
        self.saldo += valor
        print("Depósito de", valor, "realizado.")

    def saque(self, valor):
        if valor <= self.saldo:
            self.saldo -= valor
            print("Saque de", valor, "realizado.")
        else:
            print("Saldo insuficiente.")

    def extrato(self):
        print("Saldo atual:", self.saldo)


def preencher():
    print("Bem-vindo ao Sistema Bancário!")
    banco = Banco()

    while True:
        print("\nSelecione uma operação:")
        print("1 - Depósito")
        print("2 - Saque")
        print("3 - Saldo")
        print("0 - Sair")

        opcao = input("Opção: ")

        if opcao == "1":
            valor = float(input("Informe o valor a ser depositado: "))
            banco.deposito(valor)
        elif opcao == "2":
            valor = float(input("Informe o valor a ser sacado: "))
            banco.saque(valor)
        elif opcao == "3":
            banco.extrato()
        elif opcao == "0":
            print("Saindo do Sistema Bancário.")
            break
        else:
            print("Opção inválida. Tente novamente.")



preencher()
