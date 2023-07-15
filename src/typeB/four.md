# four

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

::: v-pre
`{{ This will be displayed as-is }}`
:::