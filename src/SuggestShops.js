import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: #FFA500;
    &:hover {
        color: #FF4500;
        text-decoration: underline;
    }
`;

// showShopは一つのお店を表示する関数(になっていく)
function ShowShop(props){
    const shopInfo = props.shopInfo;
    return(
        <div>
            <StyledLink href={shopInfo["urls"]["pc"]} rel="noopener noreferrer" target="_blank">
                <h2>{shopInfo["name"]}</h2>
            </StyledLink>
            <p>{ shopInfo["genre"]["name"] }</p>
            { shopInfo["genre"]["catch"] &&
                <p>{ shopInfo["genre"]["catch"] }</p>
            }
            { shopInfo["photo"]["pc"]["l"] &&
                <img 
                    src={ shopInfo["photo"]["pc"]["l"] }
                    style={{
                        width:"90%",
                        borderRadius:"5%"
                    }}
                />
            }
            { shopInfo["open"] &&
                <p>{shopInfo["open"]}</p>
            }
            { shopInfo["budget"]["average"] === 0 ?
                <p>予算: 不明</p> :
                <p>予算: { shopInfo["budget"]["average"] }</p>
            }
        </div>
    );
}

function SuggestShops(props){
    const filteredShops = props.filteredShops;
    if (filteredShops.length === 0){
        return (
            <div>
                アンケート結果を見たすお店がありませんでした。
            </div>
        );
    }
    const shopInfo = filteredShops[Math.floor(Math.random() * filteredShops.length)];
    return  <ShowShop shopInfo={shopInfo}/>;
}

export default SuggestShops;
