import psutil
import requests
import datetime

def get_system_data():
    cpu_usage = psutil.cpu_percent(interval=1)
    storage = psutil.disk_usage('/')
    storage_usage = storage.percent
    ram = psutil.virtual_memory()
    ram_usage = ram.percent

    return {
        'cpuUsage' : cpu_usage,
        'storageUsage' : storage_usage,
        'ramUsage' : ram_usage,
        'timestamp' : datetime.datetime.now().isoformat()
    }