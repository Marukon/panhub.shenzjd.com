import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="card">
    <div class="badge">Test Page</div>
    <h1>这是一个测试页</h1>
    <p>当前页面由构建脚本打包输出，服务运行正常。</p>
    <div class="status-box">
      <span class="status-dot"></span>
      构建输出目录: <code>dist/index.html</code>
    </div>
    <button id="counter-btn" class="btn">点击测试: 0</button>
  </div>
`

let count = 0
const counterBtn = document.querySelector('#counter-btn')
counterBtn.addEventListener('click', () => {
  count++
  counterBtn.textContent = `点击测试: ${count}`
})
