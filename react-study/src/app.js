import Logo from './components/logo/logo.jsx';
import React from 'react';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
import Warning from './components/warning/warning.jsx';
import Link from './components/link/link.jsx';
import './app.css';
import 'normalize.css';
export default function App() {
    return <div>
        <Header >
            <Logo name='JackDou' />
            <Nav>
                <Nav.Item router='/1'>文档</Nav.Item>
                <Nav.Item router='/2'>教程</Nav.Item>
                <Nav.Item router='/3'>博客</Nav.Item>
                <Nav.Item router='/4'>社区</Nav.Item>
            </Nav>
            <Nav>
                <Nav.ItemSearch />
                <Nav.Item router='/5'>v17.0.1</Nav.Item>
                <Nav.Item router='/6'>多语言</Nav.Item>
                <Nav.Item router='/7'>GitHub</Nav.Item>
            </Nav>
        </Header>
        <main>
            <h1>开始</h1>
            <p>这是一个 React 文档及相关资源的概览页面。</p>
            <p>
                React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React。
                </p>
            <Warning title='提示'>当你对一些 JavaScript 知识感到疑惑时，MDN 和 javascript.info 是很棒的资源网站。你也可以去社区支持论坛寻求帮助。</Warning>
            <p>
                并非每一个 React 版本都值得我们在博客上发布文章，但你可以在 <Link href='http://www.baidu.com'>React</Link> 代码仓库中的 CHANGELOG.md 文件或更新日志页面找到每个版本的更新日志。
            </p>
        </main>
        <aside>
            <ul>
                <li>安装</li>
                <li>安装</li>
                <li>安装</li>
                <li>安装</li>
                <li>安装</li>
                <li>安装</li>
                <li>安装</li>
            </ul>
        </aside>

    </div>
}
