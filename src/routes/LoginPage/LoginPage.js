import React from 'react';
import { connect } from 'dva';
import styles from './LoginPage.css';

import WrappedNormalLoginForm from '../../components/Login/Login';

function LoginPage() {
    return (
        <div className={styles.loginform} id='components-form-demo-normal-login"'>
            <div>
                <h2 className={styles.title}> nxwow登录</h2>
            </div>
            <WrappedNormalLoginForm  className={styles.WrappedNormalLoginForm} />
        </div>
        // <div className={styles.normal}>
        //     <h1 className={styles.title}>Yay! Welcome to dva!</h1>
        //     <ul className={styles.list}>
        //     </ul>
        // </div>

    )
}



export default connect()(LoginPage)