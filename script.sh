echo "Criando diretórios"
mkdir /usuario
mkdir /adm
mkdir /comercio
mkdir /ti

echo "Criando Grupos"
groupadd grupo_adm
groupadd grupo_comercio
groupadd grupo_ti


echo "Criando usuários"
useradd sebastiao -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_adm
useradd antonia -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_adm
useradd joao -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_adm

useradd lurdes -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_comercio
useradd sebastiana -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_comercio
useradd jorge -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_comercio

useradd josefina -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_ti
useradd antonio -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_ti
useradd rogerio -m -s /bin/bash -p $(openssl -crypt senha123) -G grupo_ti


echo "Especificando permissões dos diretórios"
chown root:grupo_adm/adm
chown root:grupo_comercio/comercio
chown root:grupo_ti /ti

# Especificando as permissões, ou seja, bloqueando para outros usuários
# (1 - root - permissão total
#  2 - grupo especificado - permissão total
#  3 - outros grupos - nenhuma permissão
# )

chmod 770 /adm
chmod 770 /comercio
chmod 770 /ti
chmod 777 /usuario

echo "Fim do script!"
