# Helper

## Husky

通过 `Husky` 在 `Git commit` 时进行代码校验。

首先安装依赖

```bash
yarn add husky -D
```

```bash
npm pkg set scripts.prepare="husky install"

npm run prepare
```

运行命令后会在项目根目录创建 `.husky` 文件夹。

现在给 `Husky` 添加一个 `Hook`

```bash
npx husky add .husky/pre-commit "npm run lint"
```

添加 `hook` 之后，每次 `git commit` 之前都会先运行 `npm run lint`，通过之后才会提交代码。


## lint-staged

安装依赖

在 `package.json` 添加相关配置。

```bash
{
  "lint-staged": {
    "*.{js,jsx,tsx,ts}": [
      "npm run lint"
    ]
  }
}
```

并在 `.husky/pre-commit` 中替换 `npm run lint` 为 `npx lint-staged`。现在我们每次提交代码前都会对改动的文件进行 `Lint` 检查。


## commitlint

使用 commitlint 对提交信息进行校验。先安装依赖：

```bash
yarn add @commitlint/cli @commitlint/config-conventional -D
```

然后在根目录创建配置文件 `.commitlintrc.cjs`

```bash
module.exports = {
  extends: ["@commitlint/config-conventional"]
}
```

把 `commitlint` 命令添加进 `Husky Hook`。运行命令：

```bash
npx husky add .husky/commit-msg "npx --no-install commitlint -e $HUSKY_GIT_PARAMS"
```