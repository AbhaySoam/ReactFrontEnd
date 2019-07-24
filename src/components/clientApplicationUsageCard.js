import React from 'react';
import Modal from 'react-modal';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from 'react-bootstrap/Card';
import axios from 'axios';
// import '../App.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const tableStyle = {
    border: "none",
}

class ClientApplicationUsageTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            data: [],
            accessors: [],
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        //const url = `${API_URL}/activeUsers`;
        const url = this.props.url;
        axios.get(url).then(response => {
            this.setState({data: response.data, accessors: Object.keys(response.data[0])})
        })
        .catch(err => {
            console.log(err);
        });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
        //console.log('hello')
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {
        //const { data } = this.state.data;
        return ( <div className = "" >

            <Card className={'card'} border="primary" style = {this.props.style} >
            <Card.Body style = {{padding: 0}} >
            <Card.Title className={'card-header'}  style = {{fontSize: '1.1em', marginBottom: 0, color: 'white' ,backgroundColor:"blue"}} >{this.props.title} </Card.Title> 
            
            <ReactTableComp  
            data = {this.state.data} accessors = {this.state.accessors} 
                defaultPageSize={3} showPaginationBottom={false}
                />


            <button className={'moreLink'} style={{border: 'none', backgroundColor: 'white', color: 'blue'}} onClick = { this.openModal } > More... </button>  <br / > 
            <Modal isOpen = { this.state.modalIsOpen }
            onAfterOpen = { this.afterOpenModal }
            onRequestClose = { this.closeModal }
            style = { customStyles }
            ariaHideApp={false}
            contentLabel = "Example Modal" >

            <button className={'moreLink'} style={{border: 'none', backgroundColor: 'white', color: 'blue'}} onClick = { this.closeModal } > close </button> 
            <h5>{this.props.title}</h5>
            <ReactTableComp data = {this.state.data} accessors = {this.state.accessors} 
                defaultPageSize={10} showPaginationBottom={true} 
                />
            <br / >


            </Modal> 

            </Card.Body> 
            </Card >

            </div >
        );
    }
}

function ReactTableComp(props) {
    return (
        <ReactTable 
        // PaginationComponent={Pagination}
        data = { props.data }
        showPageSizeOptions={false}
        columns = {
            [{
                    // Header: "Access Type",
                    accessor: props.accessors[0],
                },
                {
                    // Header: "Location"
                    accessor: props.accessors[1]
                }
            ]
        }
        defaultPageSize = { props.defaultPageSize }
        style = {tableStyle}
        showPaginationBottom = { props.showPaginationBottom }
       />
    );
}


export default ClientApplicationUsageTable;