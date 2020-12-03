import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow
  } from '@coreui/react'

import {
    Row,
    Col
} from 'react-bootstrap'

const Teste = () =>{
    return(
        <>
            <CCard>
                <CCardHeader>   
                    <Row className="align-items-center justify-content-md-center" alignHorizontal="center">
                        <Col className="align-items-center" lg="2">
                            Foto colaborador
                        </Col>
                        <Col  lg="2">
                            dados col
                            <h2>Teste </h2>
                            <h2> Teste </h2>
                        </Col>
                        <Col  lg="2">
                            dados col 2
                            <h2>Teste </h2>
                            <h2> Teste </h2>
                        </Col>
                        
                    </Row>                    
                </CCardHeader>
                <CCardBody>  Forms </CCardBody>
            </CCard>
        </>
    )
}

export default Teste