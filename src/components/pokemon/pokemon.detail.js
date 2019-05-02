import React from 'react';
import {axiosGet} from '../../helpers/axions.helper';
import { Image, Dimmer, Loader, Segment, Breadcrumb, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import '../../helpers/style.helper.css';

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
        const sprite = pokemon ? require(`pokemon-sprites/sprites/pokemon/${pokemon.id}.png`) : null;
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
                        <Header as='h2' className='Capitalize'>{pokemon.name}</Header>
                        <Image circular={true} src={sprite}></Image>
                    </Segment>
                </React.Fragment>
            )
        }
    }
}

export default PokemonDetail;