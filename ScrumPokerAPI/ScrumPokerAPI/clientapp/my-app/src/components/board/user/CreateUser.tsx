﻿
import { Planningpoker } from '../../components/Planningpoker';
import { useParams, useHistory } from 'react-router-dom';
import { createUser } from '../../../../src/api/scrum-poker-api';
import { adminContext } from '../../../models/context';
import * as React from 'react';
import { useContext, useState } from 'react';

export const CreateUser = () => {
    const [userName, setUserName] = useState('');
    const [gender, setGender] = useState('M');
    const history = useHistory();
    const { id } = useParams();
    const { isAdmin } = useContext(adminContext);
    const onSubmitHandler = async () => {
        const userId = await createUser(id as string, {
            name: userName,
            gender: gender,
            isAdmin: isAdmin,
            point: 0,
            showPoint: false,
        });
        if (userId) history.push(`/boards/${id}/users/${userId}`);
    };

    return (
        <div className="container container-card">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <Planningpoker></Planningpoker>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Create your profile for the board</h5>
                            <div className="form-group">
                                <label className="float-left">Name</label>
                                <input
                                    type="input"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="form-control form-control-lg rounded-0"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <label className="input-group-text">Gender</label>
                                </div>
                                <select
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                    className="custom-select"
                                >
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    onClick={onSubmitHandler}
                                    className="btn btn-default btn-lg float-left"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};