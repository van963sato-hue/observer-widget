
# 観測者ウィジェット PWA — GitHub Pages 版

## デプロイ手順（スマホだけでOK）
1. GitHubで新しい公開リポジトリを作成（例：`observer-widget`）。
2. このフォルダの中身（`index.html`, `assets/`, `README.txt` ほか）を**そのまま**アップロード。
   - ※ ルート直下に `index.html` があること。
3. リポジトリの **Settings → Pages** を開き、
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` / **Folder**: `/ (root)` を選択 → **Save**。
4. 数十秒後、**GitHub Pages URL** が表示されます（例：`https://<username>.github.io/observer-widget/`）。
5. スマホでそのURLを開き、ブラウザの共有メニューから **「ホーム画面に追加」**。これでPWA化（オフライン可）。
