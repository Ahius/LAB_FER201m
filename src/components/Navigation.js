import React, { Component } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { Icon, Navbar } from 'react-materialize';
import { Link } from 'react-router-dom';
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className="menu">
            {/* <div style={{ position: 'relative' }}>
                <a className='switch-mode' href='#' onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'

                    }} data-testid="toggle-theme-btn">
                    <p  ><Icon>autorenew</Icon>Switch Nav to {!dark ? 'Dark' : 'Light'} mode</p>
                </a>
            </div> */}
            <Navbar style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
                alignLinks="right"
                brand={<a href="/">Logos</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}

            >
                <div className="switch-navbar" style={{ marginRight: 700 }}>
                    <a
                        className="switch-mode"
                        href="#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none',
                        }}
                        data-testid="toggle-theme-btn"
                    >
                        <ul>
                            <li>Switch Nav to {!dark ? 'Dark' : 'Light'} mode</li>
                        </ul>

                    </a>
                </div>
                <ul>

                    <li><Link to='/'><Icon left>home</Icon>Home</Link></li>
                    <li to='/about'><Link to='/about'><Icon left>info_outline</Icon>About</Link></li>
                    <li to='/news'><Link to='/news'><Icon left>dvr</Icon>News</Link></li>
                    <li to='/contact'><Link to='/contact'><Icon left>contacts</Icon>Contact</Link></li>
                </ul>

            </Navbar>


        </div>
    )
}








{/* <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
                    <ul>
                        <li><a className="active" href='/'>Home</a></li>
                        <li><a href='#news'>News</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                    <div style={{ position: 'relative' }}>
                        <a className='switch-mode' href='#' onClick={toggle}
                            style={{
                                backgroundColor: theme.backgroundColor,
                                color: theme.color,
                                outline: 'none'
                    
                            }} data-testid="toggle-theme-btn">
                            <p>Switch Nav to {!dark ? 'Dark' : 'Light'} mode</p>
                        </a>
                    </div>

                </nav> */}