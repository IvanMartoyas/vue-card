# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Ошибки
Не работал body-parser, оказалось что его нужно было подключать самым первым модулем после самого express

 is defined but never used  no-unused-vars значит что созданная переменна или функция негде не используется
 чтобы убрать ошибку нужно припесать коментарий перед этой строчкой или в ней после кода ===> (// eslint-disable-line no-unused-vars)

no-useless-catch значит что catch просто написан и ниначто не влияет, тем самым раздувая код который не используется у затрудняет его рефакторинг

выводить в обратном порядке
v-for="(item, i) in data_posts.slice().reverse()"


