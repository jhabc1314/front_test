import Logo from './components/logo/logo.jsx';
import React from 'react';
import Header from './components/header/header.jsx';
import Nav from './components/nav/nav.jsx';
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
