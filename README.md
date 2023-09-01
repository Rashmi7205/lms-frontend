### Setting up the plain Vite Project
1.Creating a empty Project
```
    npm create vite@latest
```
2.Run the server
```
    npm install
    npm run dev
```

### Settting up tailwindcss 

[Setup instruction for tailwindcss](https://tailwindcss.com/docs/guides/vite)


### ADDing the Basic Css in index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;

body{
    margin:0;
    padding:0;
    box-sizing: border-box;
    position: relative;
}
```


### Installing the required dependencies for the project
```
npm install @reduxjs/toolkit 
    react-redux 
    react-router-dom 
    react-icons
    react-chartjs-2 
    chart.js 
    daisyui 
    axios 
    react-hot-toast 
    @tailwindcss/line-clamp
```
### Setting the eslint-simple-import-sort
```
    npm i eslint-plugin-simple-import-sort
```

### Setting up the Redux store and toolkit for the app
```
const initialState = {
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    role:localStorage.getItem('role')||"",
    data:localStorage.getItem('date')||{}
};
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{},
});

```
