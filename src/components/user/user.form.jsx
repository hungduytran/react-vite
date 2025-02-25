import { Input } from "antd";
import { Button, Flex } from 'antd';

import './user.form.css';
const UserFrom = () => {
    return (
        <div className="user-form">
            <div>
                <div>
                    <span>FullName</span>
                    <Input/>
                </div>
                <div>
                    <span>Email</span>
                    <Input/>
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password/>
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input/>
                </div>
                <div>
                    <Button type="primary">Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserFrom;