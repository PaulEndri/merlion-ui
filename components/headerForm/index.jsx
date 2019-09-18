import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Container, Form, Input, Segment, Button } from 'semantic-ui-react';

const HeaderForm = ({message, errors, submit}) => {
    const [formData, updateForm] = useState({firstName: '', lastName: '', participation: null});

    const updateFormField = (field, value) => {
        updateForm({
            ...formData,
            [field]: value
        })
    }

    const fields = [
        {
            label: "First Name",
            name: "firstName",
            type: "text",
            initialVal: null
        },
        {
            label: "Last Name",
            name: "lastName",
            type: "text",
            initialVal: null
        },
        {
            label: "Participation",
            name: "participation",
            type: "number",
            initialVal: null
        },
    ]

    return (<Container className="header-form-background-color" fluid>
        <Segment basic padded="very" compact textAlign="center" style={{display: 'flex', justifyContent: 'center'}}>
            <Form className="test">
                <Form.Group widths="equal">
                    {fields.map(({label, name, type, initialVal}, index) => (
                        <Form.Field key={index}>
                            <Input
                                placeholder={label}
                                error={errors && errors[name]}
                                value={formData[name] || initialVal}
                                type={type}
                                id={name}
                                name={name}
                                onChange={(e) => updateFormField(name, e.target.value)}
                            />
                        </Form.Field> 
                    ))}
                    <Button inverted onClick={() => submit(formData)}>
                        Send
                    </Button>
                </Form.Group>
                {message && message}
            </Form>
        </Segment>
    </Container>)
}

HeaderForm.propTypes = {
    errors: PropTypes.any,
    message: PropTypes.string,
    submit: PropTypes.func
};

export default HeaderForm;