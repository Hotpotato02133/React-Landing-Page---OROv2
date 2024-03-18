import React from 'react'
import { 
    StoreContainer,
    StoreHeading,
    BranchContainer,
    BranchCard,
    BranchName,
    BranchAddress,
    BranchContact,
 } from './StyledStore';

function Store() {
return (
    <StoreContainer>
        <StoreHeading>Stores</StoreHeading>
        
        <BranchContainer>
            <BranchCard>
                <BranchName>ORO 1</BranchName>
                <BranchAddress>JS. Alano Street in front of Public Market</BranchAddress>
                <BranchContact>Store Hours: 6:00 AM - 6:00 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 2</BranchName>
                <BranchAddress>P. Brillantes Street in front of Puericulture</BranchAddress>
                <BranchContact>Store Hours: 7:15 AM - 8:15 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 4</BranchName>
                <BranchAddress>Climaco Street corner P. Brillantes Street</BranchAddress>
                <BranchContact>Store Hours: 7:00 AM - 10:00 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 6</BranchName>
                <BranchAddress>Nunez Extension beside Ciudad Medical Center</BranchAddress>
                <BranchContact>Store Hours: 6:00 AM - 11:30 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 7</BranchName>
                <BranchAddress>Veterans Ave. in front of General Hospital</BranchAddress>
                <BranchContact>Store Hours: 6:00 AM - 11:30 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 8</BranchName>
                <BranchAddress>Gov. Lim Avenue, near OK Bazaar</BranchAddress>
                <BranchContact>Store Hours: 7:30 AM - 8:00 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 9</BranchName>
                <BranchAddress>Tetuan Street, beside WMCC Hospital</BranchAddress>
                <BranchContact>Store Hours: 6:15 AM - 11:30 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 10</BranchName>
                <BranchAddress>1/F Shopper's Center - The Gateway</BranchAddress>
                <BranchContact>Store Hours: 6:00 AM - 11:30 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 11</BranchName>
                <BranchAddress>Veterans Ave. besides Doctor's Hospi.</BranchAddress>
                <BranchContact>Store Hours: 6:00 AM - 11:30 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 12</BranchName>
                <BranchAddress>3/F Southway Square Mall</BranchAddress>
                <BranchContact>Store Hours: 8:00 AM - 8:00 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 14</BranchName>
                <BranchAddress>1/F Shopper's Center - The Gateway</BranchAddress>
                <BranchContact>Store Hours: 9:00 AM - 8:00 PM</BranchContact>
            </BranchCard>
            <BranchCard>
                <BranchName>ORO 15</BranchName>
                <BranchAddress>P. Brillantes in front of Chowking</BranchAddress>
                <BranchContact>Store Hours: 8:30 AM - 8:30 PM</BranchContact>
            </BranchCard>
        </BranchContainer>
    </StoreContainer>
)
}

export default Store
