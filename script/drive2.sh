#/bin/bash

#crontab:
#0 12 */6 * * flock -xn /run/lock/drive2.lock -c '/mnt/data2/drive2/drive2.sh'

log="/mnt/data2/drive2/drive2.log"
list="/mnt/data2/drive2/list.txt"

echo  >> $log
echo "---------------------------------------" >> $log
echo $(date +'%F %R') >> $log
echo "---------------------------------------" >> $log
cd /mnt/data2/drive2
rm $log

# Скачиание индексов:
wget -r -l 2 -e robots=off -w 10 --random-wait -p -E -U "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0" -nc --domains www.drive2.ru -A "*.html" https://www.drive2.ru/l/456720913455384076/ >> $log 2>&1

# Фильтрация:
cd /mnt/data2/drive2/www.drive2.ru
prefix="https://www.drive2.ru/"
grep -r -i -E "<title>.*sportage.*</title>" | grep index.html |sed -E "s|\/index\.html||" | sed -E "s|(^[0-9a-zA-Z\.\/]+).*|$prefix\1|" | sort | uniq > $list

# Скачивание найденных страниц:
cd /mnt/data2/drive2
wget -k -e robots=off -p -w 10 --random-wait -E -U "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:55.0) Gecko/20100101 Firefox/100" -i $list -P sportage1faq >> $log 2>&1

# Отправка в репозиторий:
cd /mnt/data2/drive2/sportage1faq
git add . >> $log 2>&1
git commit -m "Обновление от $(date +'%F %R')"
git push >> $log 2>&1
