## 1. 安装依赖
- react 相关安装包
-  cnpm i react react-dom @types/react @types/react-dom react-router-dom @types/react-router-dom react-transition-group @types/react-transition-group react-swipe @types/react-swipe -S
- "@types/react": "^16.9.23", // react 核心包类型声明文件
    "@types/react-dom": "^16.9.5", // react 编译html类型声明文件
    "@types/react-router-dom": "^5.1.3", // react 路由类型声明文件
    "@types/react-swipe": "^6.0.0", // react 轮播图类型声明文件
    "@types/react-transition-group": "^4.2.4", // react 动画库类型声明文件
    "react": "^16.12.0", // react 核心包
    "react-dom": "^16.12.0", // react 编译html
    "react-router-dom": "^5.1.2", // react 路由
    "react-swipe": "^6.0.4", // react 轮播图
    "react-transition-group": "^4.3.0" // react 动画库

- webpack 相关安装包
- cnpm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D

- typescript 相关安装包
- cnpm i typescript ts-loader source-map-loader -D
- "source-map-loader": "^0.2.4", // 生产映射文件
    "ts-loader": "^6.2.1", // 将ts转成js
    "typescript": "^3.8.2", // typescipt 核心包

- redux 相关安装包
- cnpm i redux react-redux @types/react-redux redux-thunk redux-logger @types/redux-logger -D

- redux与react路由连接
- cnpm i connected-react-router -S

## 2. webpack.config.js

## 3. typescript配置  
- tsc -init