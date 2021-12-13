import React from 'react'
import classes from '../Header/Pratice.module.scss';


function Pratice() {
    return (
        <div>
            <header className={classes['c__header']}>
                <h1 className={classes['c__logo']}><a href="#">IStore</a></h1>
                <div className={classes['c-header__nav']}>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Works</a></li>
                        </ul>
                    </nav>
                    <a href="#" className={classes['c-user']}>
                        <span>Ahmed Shah</span>
                        <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                    </a>

                </div>
            </header>
            <div className={classes.wrapper} >
                <aside>
                    <ul className={classes.icons}>
                        <li>
                            <div>
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png"></img>
                            <p>Home</p>
                            </div>
                            </li>
                        <li>Cart</li>
                        <li>Coupon</li>
                        <li>Favorite Items</li>
                        <li>Settings</li>
                    </ul>

                </aside>
                <main>
                    <div className={classes.logo}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1172/1172477.png" />
                        <h4>Top Sellers</h4>
                    </div>

                    <div className={classes.wrapper}>
                        <ul className={classes['top-sellers']}>
                            <li>
                                <div className={classes['c-seller']}>
                                    <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                                    <div>
                                        <h3>John smith</h3>
                                        <p>150 orders</p>
                                    </div>
                                </div>


                            </li>
                            <li>
                                <div className={classes['c-seller']}>
                                    <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                                    <div>
                                        <h3>John smith</h3>
                                        <p>150 orders</p>
                                    </div>
                                </div>


                            </li>
                            <li>
                                <div className={classes['c-seller']}>
                                    <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                                    <div>
                                        <h3>John smith</h3>
                                        <p>150 orders</p>
                                    </div>
                                </div>


                            </li>
                            <li>
                                <div className={classes['c-seller']}>
                                    <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                                    <div>
                                        <h3>John smith</h3>
                                        <p>150 orders</p>
                                    </div>
                                </div>


                            </li>
                            <li>
                                <div className={classes['c-seller']}>
                                    <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                                    <div>
                                        <h3>John smith</h3>
                                        <p>150 orders</p>
                                    </div>
                                </div>


                            </li>
                            <li>
                                <div className={classes['c-seller']}>
                                    <img className={classes['c-avatar']} src="https://cswnn.edu.in/system/files/2021-02/avatar-png-1-original.png"></img>
                                    <div>
                                        <h3>John smith</h3>
                                        <p>150 orders</p>
                                    </div>
                                </div>


                            </li>
                        </ul>

                    </div>
                    <div className={classes.logo}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1172/1172477.png" />
                        <h4>Top Articles</h4>
                    </div>
                    <div className={classes['add__space']}>
                        <ul className={classes['articles-wrapper']}>
                            <li>
                                <article className={classes['article-img']}>
                                    <a href="#">
                                        <img src="https://via.placeholder.com/245x150/1A6CCC/fff" alt="" />
                                        <div>
                                            <h3>How to design in a logo in 5 steps</h3>
                                            <p>By Ahmad Shadeed</p>
                                        </div>
                                    </a>
                                </article>

                            </li>
                            <li>
                                <article>
                                    <a href="#">
                                        <img src="https://via.placeholder.com/245x150/1A6CCC/fff" alt="" />
                                        <div>
                                            <h3>How to design in a logo in 5 steps</h3>
                                            <p>By Ahmad Shadeed</p>
                                        </div>
                                    </a>
                                </article>
                            </li>

                        </ul>

                    </div>
                    <div className={classes.logo}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1172/1172477.png" />
                        <h4>Search Articles</h4>
                    </div>
                    <div className={classes['add__space']}>
                        <form action="">
                            <input type="text" name="" id="" placeholder="What are you looking for?" />
                            <button>Search</button>
                        </form>
                    </div>



                </main>
            </div>

        </div>
    )
}

export default Pratice
