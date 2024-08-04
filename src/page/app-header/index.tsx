import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import './app-header.scss';

export const AppHeader = React.memo(() => {
    return <div className="app-header">
        <img alt="app-logo" src={`${process.env.PUBLIC_URL}/yugimeow.ico`} width={48} />
        <div className="app-description">
            <h1>YugiMeow card maker <small style={{ fontFamily: 'serif' }}>v{process.env.REACT_APP_VERSION ?? 'unknown'} TH</small></h1>
            <div className="app-contribution">
                <span>dev: <b>Pondsan1412</b></span>
                
                <Popover overlayClassName="disclaimer-overlay" content={<div className="disclaimer">
                    <h2>Disclaimer</h2>
                    <ul>
                        <li>สิ่งนี้คือโปรเจ็คที่จัดทำขึ้นมาโดยบุคคล not official</li>
                        <li>ฉันไม่รับผิดชอบต่อการ์ดที่สร้างโดยแอพนี้ รวมถึงรูปภาพ ข้อความในการ์ด และผลิตภัณฑ์ใด ๆ ที่เกี่ยวข้องกับการ์ด</li>
                        <li>ฉันไม่ได้เป็นเจ้าของเลเยอร์การ์ดและแบบอักษรของ Yu-Gi-Oh ที่ใช้ในโปรเจ็กต์นี้</li>
                        <li>หากคุณต้องการแก้ไขเลเยอร์การ์ด หรือใช้ใน public project โปรดติดต่อ pondforbusiness@gmail.com <a
                            href="https://www.github.com/pondsan1412"
                            target="_blank"
                            rel="noreferrer">Pondsan1412</a> directly.</li>
                    </ul>
                </div>}>
                    <ExclamationCircleOutlined className="disclaimer-icon" />
                </Popover>
            </div>
        </div>
    </div>;
}, () => true);

export const taintedCanvasWarning = <Popover
    overlayClassName="disclaimer-overlay"
    style={{ display: 'inline-block' }}
    content={<div className="disclaimer">
        <h2>What is happening?</h2>
        <p>
        You are using an image host that does not get the "approval" needed to be draw to the app. Browsers see it as a potential security risk (even if it is not the case), and mark the canvas as "tainted".
        </p>
        <h2>How does it affect me?</h2>
        <p>
        A "tainted canvas" prevent all sort of automatic save. From then on you must save the card manually by right click it → "Save image as...". It is implying that this action is fully of your concern.<br />
        Furthemore, once it get tainted, it will remains tainted even if you switch to other "safe" image host.
        </p>
        <h2>How do I fix it?</h2>
        <p>
        Change to other safe and popular image host ("imgur" for example) <b>then refresh the page</b>.<br />
        If you cannot afford to do that, the app will also work mostly just fine, you only need to manually save the card (and keep cautious).
        </p>
    </div>}>
    <ExclamationCircleOutlined className="disclaimer-icon" />
</Popover>;