import styled from "styled-components";

const ContactContainer = ({className}) => {
    return (
        <div className={className}>
            <h1>For any questions, write or call me:</h1>
            <a className='mail' href="mailto:ligoero@gmail.com">ligoero@gmail.com</a>
            <a className='tel' href="tel:+79915583210">+7 (991) 558-32-10</a>
            <a className='telegram' href="https://t.me/manzaero">@manzaero</a>
        </div>
    )
}

export const Contact = styled(ContactContainer)`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex: 1;
    h1 {
        margin-bottom: 20px;
        color: white;
    }

    .mail, .tel, .telegram {
        font-size: 24px;
        margin: 10px 0;
        color: inherit;
        text-decoration: none;
        filter: hue-rotate(60deg) brightness(1.3) saturate(1.5);
        transition: filter 0.3s ease;
    }
    .mail {
        font-weight: 600;
        background: linear-gradient(90deg, #7b61ff, #dd16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .tel {
        font-weight: 600;
        background: linear-gradient(90deg, #c52a05 , #e91ed9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .telegram {
        font-weight: 600;
        background: linear-gradient(90deg, #9B610D, #aa16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`