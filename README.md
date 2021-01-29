# parcel-react-cli

使用  [parcel 2.0](https://v2.parceljs.org/) 打包，其中已包含配置一下依赖：

- react 框架
- dva
- scss 样式
- typescript



## ❗注意

parcel 2版本相对于 1版本来说有略微的改动。详情查看 [🔗迁移](https://v2.parceljs.org/getting-started/migration/)

> Many `package.json`s (e.g. the one generated by `npm init`) contains `main: "index.js"` which ignored by most tools (for non-library projects). Parcel 2 will however use that value as the output path
>
> 大概的意思就是 parcel 2 会将 `package.json` 中的 `main ` 作为输出路径。这个是与1版本不同的，比较容易踩坑，请注意一下。



