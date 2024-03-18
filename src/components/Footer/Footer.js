import React from 'react';
import { Button } from '../../globalStyles';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaFacebookMessenger
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterSubscription,
    FooterSubText,
    FooterSubHeading,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './StyledFooter';

function Footer() {

    const date = new Date();

    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                    <Button primary fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>Who we are</FooterLink>
                        <FooterLink to='/'>Vision</FooterLink>
                        <FooterLink to='/'>Mission</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>Contact</FooterLink>
                        <FooterLink to='/'>Support</FooterLink>
                        {/* <FooterLink to='/'>Destinations</FooterLink>
                        <FooterLink to='/'>Sponsorships</FooterLink> */}
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>ORO</FooterLinkTitle>
                        <FooterLink to='/'>ORO</FooterLink>
                        <FooterLink to='/'>ORO</FooterLink>
                        <FooterLink to='/'>ORO</FooterLink>
                        <FooterLink to='/'>ORO</FooterLink>
                    </FooterLinkItems> */}
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <a href='https://www.facebook.com/OROBusinessGroup' target="_blank" rel="noopener noreferrer">ORO Business Group</a>
                        <a href='https://www.facebook.com/OROWonderDrug' target="_blank" rel="noopener noreferrer">ORO Wonder Drug</a>
                        <a href='https://www.facebook.com/OROMegaworld' target="_blank" rel='noopener noreferrer'>ORO Megaworld</a>
                        <a href='https://www.facebook.com/people/FOTON-Zamboanga/100057353112591' target="_blank" rel='noopener noreferrer'>Foton</a>
                        <a href='https://www.facebook.com/AbaloneSM/' target="_blank" rel="noopener noreferrer">Abalone</a>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon alt='oro logo'/>
                        ORO
                    </SocialLogo>
                    <WebsiteRights> © {date.getFullYear()} Build and Designed by ORO Dev Team </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/OROBusinessGroup' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.messenger.com/t/100067572742979' target='_blank' aria-label='Messenger' >
                            <FaFacebookMessenger />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    );
}

export default Footer;