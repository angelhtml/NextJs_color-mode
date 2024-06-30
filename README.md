<h1 align="center">Next js color mode</h1>
<p align="center">
  <img src="https://iili.io/dFXu6kG.png"/>
  <img src="https://iili.io/dFXAh67.png"/>
</p>

<h2>Theme controller</h2>
you customize the theme from this jsx component
<p>~/themes/themes.jsx</p> 

``` Javascript


exports.themes = {
    primery: {
        bg: {
            dark: "#330038",
            light: "#fff"
        },
        color: {
            dark: "#fff",
            light: "black"
        },
        border: {
            dark: "#5f0069",
            light: "#b600b6"
        }
    },
    secondary: {
        bg: {
            dark: "purple",
            light: "#f0f"
        },
        color: {
            dark: "white",
            light: "silver"
        }
    }
}
```
