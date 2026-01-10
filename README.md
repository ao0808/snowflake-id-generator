# Для данного ТЗ понадобилось настроить host
### echo "Minikube IP в Docker: $MINIKUBE_IP"
Minikube IP в Docker: 192.168.49.2
sudo sed -i '/snowflake.dev.local/d' /etc/hosts
echo "192.168.49.2 snowflake.dev.local" | sudo tee -a /etc/hosts
