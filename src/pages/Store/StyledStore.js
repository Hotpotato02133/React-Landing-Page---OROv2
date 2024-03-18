    import styled from 'styled-components';

    export const StoreContainer = styled.div`
        padding: 80px;
    `;

    export const StoreHeading = styled.h2`
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
        color: #161626;
    `;

    export const BranchContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    `;

    export const BranchCard = styled.div`
        cursor: pointer;
        border-radius: 8px;
        padding: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for smooth hover effect */

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05);
        }

        background: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.15);
    `;

    export const BranchName = styled.h3`
        font-size: 18px;
        margin-bottom: 10px;
        color: #262626;
    `;

    export const BranchAddress = styled.p`
        font-size: 14px;
        color: #777;
        font-weight: bold;
        margin-bottom: 15px;
    `;

    export const BranchContact = styled.p`
        font-size: 14px;
        color: #666;
    `;
