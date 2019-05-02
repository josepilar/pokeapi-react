import React, {useState, useEffect} from 'react';
import {axiosGet} from '../helpers/axions.helper';
import {Segment, Header, Image, List, Pagination, Loader, Dimmer} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import './thingList.css';
import '../helpers/style.helper.css';
import pokeball from '../img/pokeball.png';

function calculateNumberOfPages(total) {
    const exact = !(total%15);
    return exact ? total/15 : Math.floor(total/15) + 1;
}

export default function ThingList(props) {
    const {url, title} = props;

    const [itemList, setItemList]= useState([]);
    const [totalPages, changeTotalPages]= useState(0);
    const [isLoadingData, setIsLoadingData]= useState(false);

    const loadData = (url, data, params) => {
        setIsLoadingData(true);
        axiosGet(url, data, params).then((result => {
            setIsLoadingData(false);
            setItemList(result.data.results);
            changeTotalPages(calculateNumberOfPages(result.data.count));
        }));
    };

    const onPageChange = (a, page) => {
        loadData(url, null, {offset: (page.activePage - 1) * 15});
    };

    const getSprite = (wholeUrl) => {
        if(url !== 'pokemon'){
            return pokeball;
        }
        const urlElements = wholeUrl.split('/').filter(String);
        return require(`pokemon-sprites/sprites/${url}/${urlElements[urlElements.length - 1]}.png`);
    };

    useEffect(() => {
        loadData(url, {});
    }, [url]);

    return (
        <React.Fragment>
            <Segment className="thingsList">
                <Dimmer active={isLoadingData}>
                    <Loader />
                </Dimmer>
                <Header as="h2" dividing>{title}</Header>
                <List selection verticalAlign='middle'>
                    {itemList.map((item) => {
                        const sprite = getSprite(item.url);
                        return (
                            <List.Item as={Link} to={`/${url}/${item.name}`} key={item.name}>
                                <Image avatar src={sprite}/>
                                <List.Content>
                                    <List.Header className='Capitalize'>{item.name}</List.Header>
                                </List.Content>
                            </List.Item>
                        );
                    })}
                </List>
            </Segment>
            <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        </React.Fragment>
    );
}