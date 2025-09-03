## 如何提交新的硬盘型号

1. **Fork 本仓库**  
   点击右上角的 Fork 按钮，将项目复制到你自己的 GitHub 账号下。

2. **添加新型号数据**  
   在你的分支上，编辑项目的数据文件（如 `src/data/your-data-file.ts`），按照已有格式添加新的硬盘型号及相关信息。

3. **提交并推送更改**  
   将修改提交到你的分支并推送到你的仓库。

4. **发起 Pull Request**  
   回到本仓库，点击 “New Pull Request” 按钮，提交你的变更，简要描述你的补充内容。

5. **等待审核合并**  
   管理员会尽快审核并合并你的贡献。

> 感谢你的贡献！如需帮助，欢迎在 Issues 区留言。

---

如需补充详细文件名、字段格式等，可适当具体描述。例如“请编辑 `src/data/harddrives.ts` 文件，按照如下格式添加：
```ts
{
  model: 'ST2000DM008',
  brand: 'Seagate',
  technology: 'SMR'
}
```



# Repo说明

## 技术栈

本项目基于以下技术构建：

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

所有 shadcn/ui 组件已下载至 `@/components/ui` 目录下。

## 项目结构

- `index.html` - HTML 入口文件
- `vite.config.ts` - Vite 配置文件
- `tailwind.config.js` - Tailwind CSS 配置文件
- `package.json` - 项目依赖及脚本
- `src/app.tsx` - 根组件
- `src/main.tsx` - 项目入口
- `src/index.css` - 全局样式
- `src/pages/Index.tsx` - 首页逻辑

## 组件

- 所有 shadcn/ui 组件已预先下载，存放于 `@/components/ui` 目录。

## 样式

- 可在 `src/index.css` 添加全局样式，或根据需要创建新的 CSS 文件
- 推荐使用 Tailwind CSS 类进行组件样式定制

## 开发说明

- 在 React 组件中可直接从 `@/components/ui` 导入组件
- 可修改 Tailwind 配置自定义 UI 风格
- `@/` 路径别名指向 `src/` 目录
- 在 TypeScript 代码中，避免重复导出已导入的类型

## 常用命令

**安装依赖**
```shell
pnpm i
```

**新增依赖包**
```shell
pnpm add <包名>
```

**本地开发预览**
```shell
pnpm run dev
```

**打包生产构建**
```shell
pnpm run build
```


