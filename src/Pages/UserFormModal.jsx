import { memo } from 'react';
import { Modal, Button, Row , Col } from 'react-bootstrap';
import InputComponent from '../Component/InputComponent';





const UserFormModal = ({
    show = false,
    handleToggle = () => { },
    handleClose = () => { },
    handleShow = () => { },
    BackDrop = 'static',
    keyboard = false,
    Centered = false,
    Size = 'xl',
    Scrollable = true,
    Title = '',
    children,
    hasFooter = false,
    handleChangeFormInput = () => {},
    UserForm = {},
    errors = {},
    FooterButtonSubmitLabel = 'Guardar',
    handleSubmit = () => { },
    FooterButtonOptionalFunction = handleClose,
    FooterButtonOptionalLabel = 'Cerrar',
    ...rest
}) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={BackDrop}
                keyboard={keyboard}
                centered={Centered}
                dialogClassName="modal-100w"
                size={Size}
                scrollable={Scrollable}
                animation={true}
                autoFocus={true}
            >

                <Modal.Header closeButton className={`text-center bg-dark text-white`}>
                    <Modal.Title className="text-center">USER FORM</Modal.Title>
                </Modal.Header>

                <Modal.Body  className={`show-grid`}>
                <Row className="p-3">


                <Col md={6}>
                    <InputComponent
                        Name="first_name"
                        Label='First Name'
                        LabelMuted='Only First Name'
                        PlaceHolder='Jhon'
                        Value={UserForm?.first_name}
                        HtmlFor=''
                        Type='text'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                    />
                </Col>

                <Col md={6}>
                    <InputComponent
                        Name="last_name"
                        Label='Last Name'
                        LabelMuted='Only Last Name'
                        PlaceHolder='Doe'
                        Value={UserForm?.last_name}
                        HtmlFor=''
                        Type='text'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                    />
                </Col>

                <Col md={6}>
                    <InputComponent
                        Name="email"
                        Label='Email'
                        LabelMuted='JhonDoe@hotmail.com'
                        PlaceHolder='JhonDoe@hotmail.com'
                        Value={UserForm?.email}
                        HtmlFor=''
                        Type='email'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                    />
                </Col>

                <Col md={6}>
                    <InputComponent
                        Name="avatar"
                        Label='Photo Link'
                        LabelMuted='Example https://www.photo.link.jpg'
                        PlaceHolder='https://www.photo.link.jpg'
                        Value={UserForm?.avatar}
                        HtmlFor=''
                        Type='text'
                        ControlId=''
                        TextId=''
                        OnClick={() => { }}
                        OnChange={handleChangeFormInput}
                        OnEnter={() => { }}
                        Errors={errors}
                    />
                </Col>

                </Row>
              
                </Modal.Body>              

                <Modal.Footer className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <Button className='ButtonClose' variant="danger" onClick={FooterButtonOptionalFunction}>
                        {FooterButtonOptionalLabel}
                    </Button>
                    <Button className='ButtonSuccess' variant="primary" onClick={handleSubmit} disabled={Object.entries(errors).length > 0}>
                        {FooterButtonSubmitLabel}
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    )
}


export default memo(UserFormModal);