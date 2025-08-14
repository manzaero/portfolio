import styled from "styled-components";

const AboutContainer = ({className}) => {
    return (
        <div className={className}>
        <div className='title'>
            <h3>About Me</h3>
            <p>In 2020, he received a bachelor's degree in "Pedagogical
                Education" with a specialization in "Methodology of Teaching
                Information Science". Subsequently, he completed professional
                training on the Junior Developer (React) course at Result
                University, mastering the development of web applications based
                on modern JavaScript technologies and my name is Mansur Turaev -
                let's go!</p>
        </div>
        <div>
            <h3>Education</h3>
            <div className='stages'>
                <div>
                    <h2>Junior Fullstack Developer (React, NodeJs)</h2>
                    <div className="dev-point">
                        <div className='point'>
                            <p>Educational platform from Vladilen Minin</p>
                            <p>Saint Petersburg</p>
                        </div>
                        <p>July 2024 - August 2025</p>
                    </div>
                </div>
                <div>
                    <h2>Junior Fullstack Developer (Vue, Laravel)</h2>
                    <div className="dev-point">
                        <div className='point'>
                            <p>Self-taught, self-study and writing code on the Vue & Laravel framework</p>
                            <p>Everywhere</p>
                        </div>
                        <p>From 2014 to the present day</p>
                    </div>
                </div>
                <div>
                    <h2>Teacher - Methods of Teaching Computer Science</h2>
                    <div className="dev-point">
                        <div className='point'>
                            <p>Navoi State Pedagogical University</p>
                            <p>Navoi</p>
                        </div>
                        <p>September 2016 - June 2020</p>
                    </div>
                </div>
                <div>
                    <h2>Operator 1C: Trade and Warehouse</h2>
                    <div className="dev-point">
                        <div className='point'>
                            <p>United distribution</p>
                            <p>Tashkent</p>
                        </div>
                        <p>March 2012 - June 2013</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export const About = styled(AboutContainer)`
    display: flex;
    flex-direction: column;
    width: 900px;
    h3 {
        font-size: 42px;
        color: white;
    }
    p {
        font-size: 18px;
    }
    .point {
        display: flex;
        width: 600px;
        justify-content: space-between;
    }
    h2 {
        font-weight: 600;
        background: linear-gradient(90deg, #7b61ff, #dd16ad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .dev-point {
        display: flex;
        justify-content: space-between;
    }
`