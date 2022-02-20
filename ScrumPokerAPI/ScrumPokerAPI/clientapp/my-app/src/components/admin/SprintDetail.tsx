﻿import { useState, useContext } from 'react';
import './SprintDetail.css';
import { useHistory, Link } from 'react-router-dom';
import { Planningpoker } from '../components/Planningpoker';
import { createBoard } from '../../../src/api/scrum-poker-api';
import { Copy } from '../components/Copy';
import CopyText from '../components/CopyText';
import { adminContext } from '../../models/context';
import * as React from 'react';

export const SprintDetail = () => {
    const [boardName, setBoardName] = useState('');
    const [isLoading, setLoadingState] = useState(false);
    const { setAdmin } = useContext(adminContext);
    const history = useHistory();
    const onSubmitHandler = async () => {
        setLoadingState(true);

        const id = await createBoard({
            name: boardName,
            description: '',
        });

        setLoadingState(false);
        setAdmin(true);

        history.push(`/boards/${id}`);

    };


    return (
        <div className="container container-card">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <Planningpoker></Planningpoker>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Create your poker board</h5>
                            <div className="form-group">
                                <label className="float-left">Sprint Name</label>
                                <input
                                    type="input"
                                    value={boardName}
                                    onChange={(e) => setBoardName(e.target.value)}
                                    className="form-control form-control-lg rounded-0"
                                />
                            </div>
                            <div className="form-group">
                                <label className="float-left">Description</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-0"
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={() => onSubmitHandler()}
                                className={`btn btn-default btn-lg float-left ${isLoading ? 'disabled' : ''
                                    }`}
                            >
                                {isLoading === true ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm mr-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        <span>Creating ...</span>
                                    </>
                                ) : (
                                    <span>Create</span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};