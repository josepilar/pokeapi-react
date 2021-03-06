import React from 'react';
import {axiosGet} from '../../helpers/axions.helper';
import { Image, Dimmer, Loader, Segment, Breadcrumb, Card, Icon, Label, Grid, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../../helpers/style.helper.css';
import pokeball from '../../img/Pokeball-notFound.png';
import {typeColors} from '../constants/type.constants';

class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null
        }
    }

    componentDidMount() {
        axiosGet(`pokemon/${this.props.match.params.name}`).then((resp)=>{
            this.setState({
                pokemon: resp.data
            })
        });
    }

    // arrow alternate circle left
    render() {
        const {pokemon} = this.state;
        let sprite = pokeball;
        try {
            sprite = pokemon ? require(`pokemon-sprites/sprites/pokemon/other-sprites/official-artwork/${pokemon.id}.png`) : null;
        } catch (error) {}
        if (!pokemon) {
            return <Dimmer active={true}><Loader /></Dimmer>;
        } else {
            return (
                <React.Fragment>
                    <Breadcrumb size="big">
                        <Breadcrumb.Section as={Link} to='/pokemon' link>Pokemon</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron'></Breadcrumb.Divider>
                        <Breadcrumb.Section active className='Capitalize'>{pokemon.name}</Breadcrumb.Section>
                    </Breadcrumb>
                    <Segment>
                        <Grid columns={2}>
                            <Grid.Row stretched>
                                <Grid.Column>
                                    <Segment>
                                        <Card>
                                            <Image src={sprite} />
                                            <Card.Content>
                                                <Card.Header className='Capitalize'>{pokemon.name}</Card.Header>
                                                <Card.Meta>
                                                    {
                                                        pokemon.types.map((type) => {
                                                            return <Label key={type.type.name} color={typeColors[type.type.name]}>{type.type.name}</Label>
                                                        })
                                                    }
                                                </Card.Meta>
                                                {/* <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
                                            </Card.Content>
                                            {/* <Card.Content extra>
                                                <a>
                                                    <Icon name='user' />
                                                    22 Friends
                                                </a>
                                            </Card.Content> */}
                                        </Card>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header as='h3'>Pokemon Detail</Header>
                                    <span>Here goes some other pokemon related information that will be filled out later </span>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </React.Fragment>
            )
        }
    }
}

export default PokemonDetail;