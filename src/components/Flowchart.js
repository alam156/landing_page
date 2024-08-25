/*
import React, { useCallback } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialNodes = [
    { id: '1', position: { x: 50, y: 10 }, data: { label: 'Registration' } },
    { id: '2', position: { x: 50, y: 110 }, data: { label: 'eKYC' } },
    { id: '3', position: {x:300, y: 10}, data: {label: 'Quicksign portal'}},
    { id: '4', position: {x:300, y: 110}, data: {label: 'Login'}},
    { id: '5', position: {x:300, y: 210}, data: {label: 'Define Workflow'}},
    { id: '6', position: {x:300, y: 310}, data: {label: 'Upload Document'}},
    { id: '7', position: {x:300, y: 410}, data: {label: 'Signature initialization'}},
    { id: '8', position: {x:300, y: 510}, data: {label: 'Authorization'}},
    { id: '9', position: {x:550, y: 510}, data: {label: 'Signed Document'}}
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', type: 'bezier', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e3-4', source: '3', target: '4', type: 'bezier', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e4-5', source: '4', target: '5', type: 'bezier', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e5-6', source: '5', target: '6', type: 'bezier', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e6-7', source: '6', target: '7', type: 'bezier', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e2-8', source: '2', target: '8', type: 'step', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e2-3', source: '2', target: '3', type: 'step', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } },
    { id: 'e8-9', source: '8', target: '9', type: 'step', style: { stroke: '#000', strokeWidth: 2 }, markerEnd: { type: 'arrowclosed' } }]

const Flowchart = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return (
        <div style={{ width: '100vw', height: '70vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
            >
                <Controls />
                <MiniMap />
                <Background variant="dots" gap={12} size={1} />
            </ReactFlow>
        </div>
    );
}
export default Flowchart;*/
