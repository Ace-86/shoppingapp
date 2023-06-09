import React from 'react';
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading
} from './Style/FooterStyles';

const Footer = () => {

    return(
        <Box>
            <h1 style= {{
                color: 'green',
                textAlign: 'center',
                marginTop: '-50px'
            }}>
                Shopping App: Created by Aaron Griffin
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading> About Us</Heading>
                        <FooterLink href='#'> About </FooterLink>
                        <FooterLink href='#'> LinkedIn</FooterLink>
                        <FooterLink href='#'> Instagram</FooterLink>
                    </Column>
                    <Column>
                        <Heading> About Us</Heading>
                        <FooterLink href='#'> About </FooterLink>
                        <FooterLink href='#'> LinkedIn</FooterLink>
                        <FooterLink href='#'> Instagram</FooterLink>
                    </Column>
                    <Column>
                        <Heading> Contact Us</Heading>    
                        <FooterLink href='#'>
                            <i className='fab fa-facebook-f'>
                                <span style={{ marginLeft: '10px'}}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href='#'>
                            <i className='fab fa-instagram-f'>
                                <span style={{ marginLeft: '10px'}}>
                                    instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href='#'>
                            <i className='fab fa-twitter-f'>
                                <span style={{ marginLeft: '10px'}}>
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href='#'>
                            <i className='fab fa-youtube-f'>
                                <span style={{ marginLeft: '10px'}}>
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};

export default Footer;