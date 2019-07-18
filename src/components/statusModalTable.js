import React from 'react';
import Modal from 'react-modal';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import '../index.css'

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
class ModalTable extends React.Component {
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
        return ( 
            <div className = "" >
            <Card style ={this.props.style} border="primary" >
            <Card.Body style = {{padding: 0}} >
            
            <ReactTableComp data = {this.state.data} accessors = {this.state.accessors} 
                defaultPageSize={2} showPaginationBottom={false} />


            <button onClick = { this.openModal } > More </button>  <
            br / >
            <Modal isOpen = { this.state.modalIsOpen }
            onAfterOpen = { this.afterOpenModal }
            onRequestClose = { this.closeModal }
            style = { customStyles }
            ariaHideApp={false}
            contentLabel = "Example Modal" >

            <button onClick = { this.closeModal } > close </button> 
            
            <ReactTableComp data = {this.state.data} accessors = {this.state.accessors} 
                defaultPageSize={10} showPaginationBottom={true} />

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
            <ReactTable data = { props.data }
            columns = {
                [{
                        Header: "Access Type",
                        accessor: props.accessors[0]
                    },
                    {
                        Header: "Location",
                        accessor: props.accessors[1]
                    },
                    {
                        Header: "Date/timezone",
                        accessor: props.accessors[2]
                    }
                ]
            }
            defaultPageSize = { props.defaultPageSize }
            style = {tableStyle}
            // showPaginationTop
            showPaginationBottom = { props.showPaginationBottom }
            />
    );
}


export default ModalTable;