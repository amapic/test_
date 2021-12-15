// import { boolean } from 'mathjs';
import React, { useEffect, useState } from 'react';
import { countBy } from 'underscore'
import {
    ScatterChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Scatter,
    CartesianGrid,
    ResponsiveContainer,
    BarChart,
    Bar,
    Dot,
    ReferenceDot,
    ReferenceLine,
    RadialBarChart,
    RadialBar

} from 'recharts'
const fetch = require('node-fetch')
import { chercheData } from '../fonction/fonction'
import { dataT, radialT } from '../types/interface'




const CustomizedShape = (props: any) => {
    const { cx, cy, fill, planeteName } = props;
    return (
        <g>
            <Dot cx={cx} cy={cy} r={1} fill={fill} />

        </g>
    );
};

const CustomizedShapeJupiter = (props: any) => {
    const { cx, cy, fill, planeteName } = props;
    return (
        <>
            {/* <span>Terre</span> */}
            <g>
                <svg x={cx - 18} y={cy - 18} width="36" height="36" viewBox="0 0 36 36">
                    <circle fill="#FFCC4D" cx="18" cy="18" r="10.694" />
                    <path fill="#F4900C" d="M10.229 22.751c-.985.067-1.689-.308-2.203-.917.214.557.487 1.081.788 1.588.771.289 1.591.41 2.54-.272-.463-.227-.88-.415-1.125-.399zM23.086 8.608c.045.328-.187.5-.75.363-.955-.232-1.793.776-2.274 1.619-.947 1.657-4.854 3.524-4.857 2.087-.001-.679-3.452.843-3.893.161-.417-.644-1.663-.396-1.921-1.168-1.135 1.544-1.869 3.402-2.04 5.422.377.718.864 1.282 1.352 1.526.66.33 3.726 1.528 4.174.763.747-1.276 5.229-.373 5.122-1.044-.205-1.285 2.427-.23 3.373-1.886.482-.843 1.533-1.49 2.489-1.258 1.116.271 2.493-1.643 2.389-3.996-.871-1.057-1.951-1.931-3.164-2.589zm3.181 16.175c-.338.166-.671.293-.975.326-2.248.243-2.734 2.005-4.242 1.703-.777-.156-1.837 1.214-3.05 1.297-.611.042-1.489.141-2.386.308.768.175 1.565.277 2.386.277 3.331 0 6.305-1.523 8.267-3.911z" />
                    <path fill="#E85E00" d="M23.225 8.674c.953.535 1.811 1.213 2.554 2.003 2.491-.157 4.01.429 3.883 1.777-.066.705-.585 1.542-1.431 2.435-2.108 2.221-6.309 4.796-11.07 6.602-3.309 1.255-6.258 1.9-8.366 1.934-2.145.035-3.418-.563-3.302-1.803.076-.815.752-1.806 1.852-2.857-.019-.255-.039-.507-.039-.765 0-.848.109-1.669.296-2.461C3.3 18.522.5 21.807.5 24.369c0 3.487 5.162 4.558 12.275 2.957 1.65-.371 3.405-.886 5.225-1.549 3.9-1.419 7.489-3.3 10.399-5.317 4.301-2.983 7.101-6.268 7.101-8.83 0-3.486-5.162-4.558-12.275-2.956z" />
                    <path fill="#F4900C" d="M6.356 18.051c-.742.711-1.369 1.524-1.88 2.382-.49.852-.907 1.811-.844 2.671.035.856.682 1.366 1.558 1.602.874.227 1.845.287 2.834.229 1.962-.089 3.93-.415 5.841-.965 1.924-.505 3.791-1.225 5.615-2.036 3.648-1.628 7.068-3.789 10.132-6.382.368-.333.771-.649 1.124-.986.333-.337.647-.713.91-1.097.522-.768.826-1.667.335-2.352-.49-.696-1.495-1.075-2.453-1.271-.981-.187-2.01-.23-3.03-.111.992-.265 2.037-.395 3.088-.316 1.03.092 2.172.3 3.008 1.221.41.457.599 1.145.524 1.746-.057.611-.293 1.15-.563 1.635-.278.485-.59.925-.945 1.348-.352.404-.709.777-1.072 1.163-2.932 2.994-6.44 5.414-10.261 7.159-3.816 1.72-7.974 2.911-12.261 2.754-1.056-.04-2.157-.133-3.236-.548-.534-.209-1.082-.517-1.5-1.016-.429-.49-.635-1.171-.589-1.774.098-1.213.704-2.152 1.349-2.976.664-.819 1.447-1.525 2.316-2.08z" />
                </svg>
            </g>
        </>
    );
};

const CustomizedShapeTerre = (props: any) => {
    const { cx, cy, fill, planeteName } = props;
    // console.log(props);
    return (
        <g>
            <svg x={cx - 18} y={cy - 18} width="36" height="36" viewBox="0 0 36 36">
                <circle fill="#88C9F9" cx="18" cy="18" r="18" />
                <path fill="#5C913B" d="M25.716 1.756c-1.022.568-1.872 1.528-3.028 1.181-1.875-.562-4.375-1.812-6-.25s-2 3 0 2.938 3.375-2.438 4.375-1.438.749 1.813-1.625 2.125S14.5 7 13.125 7s-1.688.812-.75 1.688-.563.937-2.125 1.812.375 1.25 1.688 2 2.312-.188 2.875-1.438 2.981-2.75 3.99-2.562c1.01.188 1.01.688.822 1.562s.75.625.812-.375 1.188-1.75 2.062-1.812 1.625 1.188.625 1.812-2 1.125-.75 1.438 2.125 1.938.688 2.625-3.937 1.125-5.062.562-3.688-1.375-4.375-.938-1.062.89-1.875 1.195c-.812.305-4.125 1.805-4.188 3.743S7.438 22.438 8.75 22.5s4.5-.812 5.5-1.625 2.375-.625 2.812.312.125 1.5-.312 3 .286 2.25.987 3.562c.701 1.312 1.263 2.062 1.263 3s1 1.875 2.5.312 2.875-4.625 3.5-5.75 1.125-3.625 1.875-4.125 1.938-1.688 1.062-1.5-2.625-.062-3.062-1.312-2.312-3.625-1.438-3.875 1.875 1.39 2.25 2.164c.375.774.875 1.711 1.625 1.961s2.375-1.673 2.875-1.961c.5-.289.125-1.476-.875-1.351s-2.312 0-2.312-.624 1.25-1.438 2.25-1.25 1.75.5 2.375 1.25 1.875 2.125 2.375 3 .875 1 1.125-.562c.166-1.038.387-1.609.59-2.222-1.013-5.829-4.82-10.683-9.999-13.148z" />
            </svg>
        </g>)
}

const CustomizedShapePegasus = (props: any) => {
    const { cx, cy, fill, planeteName } = props;
    // console.log(props);
    return (
        <svg x={cx - 18} y={cy - 18} width="36" height="36" viewBox="0 0 36 36">
            <g id="surface1">
                <path fill="rgb(83.137255%,38.823529%,40%)" d="M 2.402344 24.113281 L 14.710938 24.113281 C 15.683594 24.113281 16.472656 24.902344 16.472656 25.875 C 16.472656 26.847656 15.683594 27.632812 14.710938 27.632812 L 4.265625 27.632812 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 14.710938 28.664062 L 4.265625 28.664062 C 3.695312 28.664062 3.234375 28.203125 3.234375 27.632812 C 3.234375 27.066406 3.695312 26.601562 4.265625 26.601562 L 14.710938 26.601562 C 15.113281 26.601562 15.441406 26.277344 15.441406 25.875 C 15.441406 25.472656 15.113281 25.144531 14.710938 25.144531 L 2.402344 25.144531 C 1.832031 25.144531 1.371094 24.683594 1.371094 24.113281 C 1.371094 23.542969 1.832031 23.082031 2.402344 23.082031 L 14.710938 23.082031 C 16.253906 23.082031 17.503906 24.332031 17.503906 25.875 C 17.503906 27.414062 16.253906 28.664062 14.710938 28.664062 Z M 14.710938 28.664062 " />
                <path fill="rgb(83.137255%,38.823529%,40%)" d="M 1.332031 16.480469 L 8.84375 16.480469 C 9.816406 16.480469 10.605469 17.269531 10.605469 18.242188 C 10.605469 19.214844 9.816406 20.003906 8.84375 20.003906 L 1.382812 20.003906 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 8.84375 21.035156 L 1.382812 21.035156 C 0.8125 21.035156 0.351562 20.574219 0.351562 20.003906 C 0.351562 19.433594 0.8125 18.972656 1.382812 18.972656 L 8.84375 18.972656 C 9.246094 18.972656 9.574219 18.644531 9.574219 18.242188 C 9.574219 17.839844 9.246094 17.511719 8.84375 17.511719 L 1.332031 17.511719 C 0.761719 17.511719 0.300781 17.050781 0.300781 16.480469 C 0.300781 15.914062 0.761719 15.449219 1.332031 15.449219 L 8.84375 15.449219 C 10.382812 15.449219 11.636719 16.703125 11.636719 18.242188 C 11.636719 19.78125 10.382812 21.035156 8.84375 21.035156 Z M 8.84375 21.035156 " />
                <path fill="rgb(83.137255%,38.823529%,40%)" d="M 3.941406 8.851562 L 14.710938 8.851562 C 15.683594 8.851562 16.472656 9.640625 16.472656 10.613281 C 16.472656 11.585938 15.683594 12.375 14.710938 12.375 L 2.222656 12.375 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 14.710938 13.40625 L 2.222656 13.40625 C 1.652344 13.40625 1.191406 12.941406 1.191406 12.375 C 1.191406 11.804688 1.652344 11.34375 2.222656 11.34375 L 14.710938 11.34375 C 15.113281 11.34375 15.441406 11.015625 15.441406 10.613281 C 15.441406 10.210938 15.113281 9.882812 14.710938 9.882812 L 3.941406 9.882812 C 3.371094 9.882812 2.910156 9.421875 2.910156 8.851562 C 2.910156 8.28125 3.371094 7.820312 3.941406 7.820312 L 14.710938 7.820312 C 16.253906 7.820312 17.503906 9.074219 17.503906 10.613281 C 17.503906 12.152344 16.253906 13.40625 14.710938 13.40625 Z M 14.710938 13.40625 " />
                <path fill="rgb(83.137255%,38.823529%,40%)" d="M 31.722656 27.632812 L 27.15625 27.632812 C 26.183594 27.632812 25.394531 26.847656 25.394531 25.875 C 25.394531 24.902344 26.183594 24.113281 27.15625 24.113281 L 33.597656 24.113281 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 31.722656 28.664062 L 27.15625 28.664062 C 25.617188 28.664062 24.363281 27.414062 24.363281 25.875 C 24.363281 24.332031 25.617188 23.082031 27.15625 23.082031 L 33.597656 23.082031 C 34.167969 23.082031 34.628906 23.542969 34.628906 24.113281 C 34.628906 24.683594 34.167969 25.144531 33.597656 25.144531 L 27.15625 25.144531 C 26.753906 25.144531 26.425781 25.472656 26.425781 25.875 C 26.425781 26.277344 26.753906 26.601562 27.15625 26.601562 L 31.722656 26.601562 C 32.292969 26.601562 32.753906 27.066406 32.753906 27.632812 C 32.753906 28.203125 32.292969 28.664062 31.722656 28.664062 Z M 31.722656 28.664062 " />
                <path fill="rgb(83.137255%,38.823529%,40%)" d="M 33.777344 12.375 L 27.15625 12.375 C 26.183594 12.375 25.394531 11.585938 25.394531 10.613281 C 25.394531 9.640625 26.183594 8.851562 27.15625 8.851562 L 32.058594 8.851562 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 33.777344 13.40625 L 27.15625 13.40625 C 25.617188 13.40625 24.363281 12.152344 24.363281 10.613281 C 24.363281 9.074219 25.617188 7.820312 27.15625 7.820312 L 32.058594 7.820312 C 32.628906 7.820312 33.089844 8.28125 33.089844 8.851562 C 33.089844 9.421875 32.628906 9.882812 32.058594 9.882812 L 27.15625 9.882812 C 26.753906 9.882812 26.425781 10.210938 26.425781 10.613281 C 26.425781 11.015625 26.753906 11.34375 27.15625 11.34375 L 33.777344 11.34375 C 34.347656 11.34375 34.808594 11.804688 34.808594 12.375 C 34.808594 12.941406 34.347656 13.40625 33.777344 13.40625 Z M 33.777344 13.40625 " />
                <path fill="rgb(83.137255%,38.823529%,40%)" d="M 34.617188 20.003906 L 21.285156 20.003906 C 20.316406 20.003906 19.527344 19.214844 19.527344 18.242188 C 19.527344 17.269531 20.316406 16.480469 21.285156 16.480469 L 34.667969 16.480469 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 34.617188 21.035156 L 21.285156 21.035156 C 19.746094 21.035156 18.496094 19.78125 18.496094 18.242188 C 18.496094 16.703125 19.746094 15.449219 21.285156 15.449219 L 34.667969 15.449219 C 35.238281 15.449219 35.699219 15.914062 35.699219 16.480469 C 35.699219 17.050781 35.238281 17.511719 34.667969 17.511719 L 21.285156 17.511719 C 20.886719 17.511719 20.558594 17.839844 20.558594 18.242188 C 20.558594 18.644531 20.886719 18.972656 21.285156 18.972656 L 34.617188 18.972656 C 35.1875 18.972656 35.648438 19.433594 35.648438 20.003906 C 35.648438 20.574219 35.1875 21.035156 34.617188 21.035156 Z M 34.617188 21.035156 " />
                <path fill="rgb(29.803922%,10.588235%,15.294118%)" d="M 18 36 C 12.085938 36 6.546875 33.089844 3.183594 28.21875 C 2.378906 27.058594 1.714844 25.800781 1.203125 24.484375 C 0.664062 23.082031 0.300781 21.617188 0.125 20.125 C 0.0429688 19.421875 0 18.710938 0 18 C 0 17.460938 0.0234375 16.917969 0.0703125 16.390625 C 0.203125 14.898438 0.519531 13.433594 1.015625 12.03125 C 1.472656 10.722656 2.085938 9.46875 2.835938 8.296875 C 6.167969 3.101562 11.835938 0 18 0 C 24.164062 0 29.832031 3.101562 33.164062 8.296875 C 33.914062 9.46875 34.527344 10.722656 34.984375 12.03125 C 35.480469 13.433594 35.796875 14.898438 35.929688 16.390625 C 35.976562 16.917969 36 17.460938 36 18 C 36 18.710938 35.957031 19.425781 35.875 20.125 C 35.699219 21.617188 35.335938 23.082031 34.796875 24.484375 C 34.285156 25.800781 33.621094 27.058594 32.816406 28.222656 C 32.492188 28.6875 31.851562 28.804688 31.382812 28.484375 C 30.914062 28.160156 30.796875 27.515625 31.121094 27.046875 C 31.832031 26.019531 32.421875 24.90625 32.871094 23.742188 C 33.351562 22.5 33.671875 21.203125 33.828125 19.882812 C 33.902344 19.261719 33.9375 18.628906 33.9375 18 C 33.9375 17.519531 33.917969 17.039062 33.875 16.574219 C 33.757812 15.253906 33.476562 13.957031 33.039062 12.714844 C 32.632812 11.558594 32.089844 10.445312 31.425781 9.40625 C 28.476562 4.808594 23.457031 2.0625 18 2.0625 C 12.542969 2.0625 7.523438 4.808594 4.574219 9.410156 C 3.910156 10.445312 3.367188 11.558594 2.960938 12.714844 C 2.523438 13.957031 2.242188 15.253906 2.125 16.574219 C 2.082031 17.039062 2.0625 17.519531 2.0625 18 C 2.0625 18.628906 2.097656 19.261719 2.171875 19.882812 C 2.328125 21.203125 2.648438 22.5 3.128906 23.742188 C 3.578125 24.90625 4.167969 26.019531 4.878906 27.046875 C 7.859375 31.363281 12.765625 33.9375 18 33.9375 C 20.007812 33.9375 21.960938 33.570312 23.8125 32.84375 C 24.339844 32.636719 24.941406 32.898438 25.148438 33.429688 C 25.355469 33.960938 25.09375 34.558594 24.5625 34.765625 C 22.472656 35.585938 20.265625 36 18 36 Z M 18 36 " />

            </g>
        </svg>

    );
};



const CustomizedLabel = (props: any) => {
    const { cx, cy, fill, planeteName } = props;
    return (
        <>
            <span>Pegasus b 41</span>
        </>
    )
}

const CustomLabelPegasus= (props: any) => {
    const { cx, cy, fill, planeteName } = props;
    console.log(props);
    return (
        <g >
            {/* <foreignObject x={props.viewBox.x+ props.viewBox.width*2} y={props.viewBox.y} width={100} height={100}> */}
            <text x={props.viewBox.x + props.viewBox.width * 2} y={props.viewBox.y}>{props.planet}</text>
            {/* </foreignObject> */}
        </g>
    );
};





export function Graph_masse_distance() {

    const [items, setItems] = useState<dataT[]>();//l'état initial doit être un array ne contenant pas d'objet


    useEffect(() => {
        chercheData().then((tt) => {

            var gg = Object.values(tt)

            for (var i = gg.length - 1; i >= 0; i--) {
                if (gg[i].mass === null || gg[i].orbital_period === null) {
                    gg.splice(i, 1);
                }
            }
            setItems(gg)
        });
    }, [])


    return (
        /* <span className="mx-auto w-50">Masse en Masse jupitérienne et période de révolution en jour</span> */
        <ResponsiveContainer aspect={2.5}>
            <ScatterChart id="masse_distance"
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis allowDataOverflow={true} xAxisId="0" dataKey="mass" name="masse" type="number" ticks={[0.01, 0.03, 0.1, 1, 10, 150]} scale="log" domain={[0.001, 100]} unit=" Mjup" />
                <YAxis allowDataOverflow={true} yAxisId="0" dataKey="orbital_period" ticks={[1, 10, 100, 365, 4380]} name="periode orbitale" type="number" scale="log" domain={[0.01, 1000000]} unit=" jour" />
                {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
                {/* <Tooltip cursor={{ strokeDasharray: '3 3' }} /> */}
                {/* <Legend /> */}

                <ReferenceDot x={0.45} y={4} shape={<CustomizedShapePegasus />} label={<CustomLabelPegasus planet="Pegasus"/>} />
                <ReferenceDot x={0.003} y={365} shape={<CustomizedShapeTerre />} label={<CustomLabelPegasus planet="Terre"/>} />
                <ReferenceDot x={1} y={4380} shape={<CustomizedShapeJupiter />} label={<CustomLabelPegasus planet="Jupiter"/>} />
                <ReferenceLine xAxisId="0" yAxisId="0" label="Segment" stroke="green" strokeDasharray="5 5" segment={[{ x: 1, y: 0 }, { x: 1, y: 4380 }]} />
                {/* <ReferenceLine label="Segment" stroke="green" strokeDasharray="3 3" segment={[{ x: 1, y: 0 }, { x: 1, y:4380 }]} /> */}
                <Scatter name="A school" data={items} shape={<CustomizedShape />} />
            </ScatterChart>
        </ResponsiveContainer >
    )


}

export function Graph_radial() {

    const [items, setItems] = useState<radialT[]>();//l'état initial doit être un array ne contenant pas d'objet
    let hh = "RR"

    useEffect(() => {
        chercheData().then((tt) => {

            var gg = Object.values(tt)

            for (var i = gg.length - 1; i >= 0; i--) {
                if (gg[i].radius === null) {
                    gg.splice(i, 1);
                } else {
                    if (gg[i].radius < (1.25 / 11)) {
                        gg[i].sizeType = "terrestre"
                    }
                    else if ((gg[i].radius > (1.25 / 11)) && (gg[i].radius < (2 / 11))) {
                        gg[i].sizeType = "super-terre"
                    }
                    else if ((gg[i].radius > (2 / 11)) && (gg[i].radius < (6 / 11))) {
                        gg[i].sizeType = "neptune"
                    }
                    else if ((gg[i].radius > (6 / 11)) && (gg[i].radius < (15 / 11))) {
                        gg[i].sizeType = "jupiter"
                    }
                    else if ((gg[i].radius > (15 / 11)) && (gg[i].radius < (22 / 11))) {
                        gg[i].sizeType = "super-jupiter"
                    }
                    else {
                        gg[i].sizeType = "autre"
                    }
                }
            }
            var counts = countBy(gg, 'sizeType');

            var arraytypeplanet: radialT[] = []
            for (const [key, value] of Object.entries(counts)) {
                if (key !== 'autre') {
                    arraytypeplanet.push({ 'name': key, 'uv': value, 'fill': '#8884d8' })
                }
            }
            setItems(arraytypeplanet)
        });
    }, [])

    // const style = {
    //     top: 100,
    //     left: "50%",
    //     lineHeight: '24px',
    // };


    return (
        <ResponsiveContainer aspect={0.5}>
            <RadialBarChart startAngle={270} endAngle={150} cx={"70%"} cy={"50%"} barSize={"90%"} innerRadius={"10%"} outerRadius={"100%"} data={items}>
                <RadialBar label={{ position: 'insideStart', fill: '#fff' }} dataKey="uv" />

            </RadialBarChart>
        </ResponsiveContainer >
    )


}

export function Count_annee() {

    const [items, setItems] = useState<any[]>([0]);//l'état initial doit être un array ne contenant pas d'objet
    let defaultModelID = 23

    useEffect(() => {
        chercheData().then((tt) => {

            const gg = Object.values(tt)

            const sumOfAges = gg.reduce((decount, currentValue) => {
                if (currentValue.discovered !== null) {
                    if (!Object.keys(decount).includes(currentValue.discovered.toString())) {
                        decount[currentValue.discovered] = 1;
                    } else {
                        decount[currentValue.discovered] = decount[currentValue.discovered] + 1;
                    }
                }
                return decount;
            }, {});
            let hh = []
            for (const property in sumOfAges) {
                hh.push({ 'year': property, 'value': sumOfAges[property] })
            }
            setItems(hh)
        });
    }, [])


    return (

        <ResponsiveContainer aspect={2.5}>
            <BarChart width={730} height={250} data={items}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>

    )


}

export function Taille_planete() {
    const dataTempty = {} as dataT[]
    const [items, setItems] = useState(dataTempty);//l'état initial doit être un array ne contenant pas d'objet


    useEffect(() => {
        chercheData().then((tt) => {

            let gg = Object.values(tt)
            // console.log(gg);
            setItems(gg)
        });
    }, [])


    return (

        <ResponsiveContainer aspect={1.5}>
            <ScatterChart width={730} height={250}
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis allowDataOverflow={true} label="distance à l'étoile" dataKey="semi_major_axis" name="distance" type="number" ticks={[0, 0.5, 1]} domain={[0, 1.1]} unit=" UA" />
                <YAxis allowDataOverflow={false} label="rayon" dataKey="radius" name="rayon" type="number" ticks={[0, 1, 2]} domain={[0, 2]} unit=" RJup" />
                {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="A school" data={items} shape="cross" />

            </ScatterChart>
        </ResponsiveContainer>

    )


}
export function Graph_zone_habitable() {
    const dataTempty = {} as dataT[]
    const [items, setItems] = useState(dataTempty);//l'état initial doit être un array ne contenant pas d'objet


    useEffect(() => {
        chercheData().then((tt) => {

            let gg = Object.values(tt)
            // console.log(gg);
            setItems(gg)
        });
    }, [])


    return (

        <ResponsiveContainer aspect={1.5}>
            <ScatterChart
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <YAxis allowDataOverflow={true} label="température de l'étoile" dataKey="temp" name="masse" type="number" ticks={[0, 3000, 4000, 5000, 6000, 7000]} domain={[0, 8000]} unit="K" />
                <XAxis allowDataOverflow={true} label="distance à l'étoile" dataKey="semi_major_axis" name="periode orbitale" type="number" domain={[200, 700]} unit=" jour" />
                {/* <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" /> */}
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Legend />
                <Scatter name="A school" data={items} shape="cross" />

            </ScatterChart>
        </ResponsiveContainer>

    )


}

export function Graph_rayon_moyen() {

    const [items, setItems] = useState<any[]>([0]);//l'état initial doit être un array ne contenant pas d'objet


    useEffect(() => {
        chercheData().then((tt) => {

            const gg = Object.values(tt)
            const data = gg.reduce((decount, currentValue, index) => {
                if (currentValue.radius !== null && currentValue.discovered !== null) {
                    if (Object.keys(decount).length === 0) {
                        decount["decountVal"] = {};
                        decount["decountNb"] = {};
                    }
                    if (!Object.keys(decount["decountVal"]).includes(currentValue.discovered.toString())) {
                        decount["decountVal"][currentValue.discovered] = currentValue.radius;
                        decount["decountNb"][currentValue.discovered] = 1
                    } else {
                        decount["decountNb"][currentValue.discovered] = decount["decountNb"][currentValue.discovered] + 1;
                        decount["decountVal"][currentValue.discovered] = decount["decountVal"][currentValue.discovered] + currentValue.radius
                    }
                }
                return decount;
            }, {});
            let hh = []
            for (const property in data["decountVal"]) {
                hh.push({ 'year': property, 'value': data["decountVal"][property] / data["decountNb"][property] })
            }
            setItems(hh)
        });
    }, [])


    return (

        <ResponsiveContainer aspect={1.5}>
            <BarChart data={items}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis ticks={[0, 1, 2, 2.5]} />
                {/* <Tooltip /> */}
                <Legend />
                <Bar name="moyenne des rayons en Rjupiter des planètes découvertes" dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>

    )


}

export function Moyenne_semi_major_moyen() {

    const [items, setItems] = useState<any[]>([0]);//l'état initial doit être un array ne contenant pas d'objet


    useEffect(() => {
        chercheData().then((tt) => {

            const gg = Object.values(tt)
            const data = gg.reduce((decount, currentValue, index) => {
                if (currentValue.semi_major_axis !== null && currentValue.discovered !== null) {
                    //!!
                    if (currentValue.method !== 'Imaging') {
                        if (Object.keys(decount).length === 0) {
                            decount["decountVal"] = {};
                            decount["decountNb"] = {};
                        }
                        if (!Object.keys(decount["decountVal"]).includes(currentValue.discovered.toString())) {
                            decount["decountVal"][currentValue.discovered] = currentValue.semi_major_axis;
                            decount["decountNb"][currentValue.discovered] = 1
                        } else {
                            decount["decountNb"][currentValue.discovered] = decount["decountNb"][currentValue.discovered] + 1;
                            decount["decountVal"][currentValue.discovered] = decount["decountVal"][currentValue.discovered] + currentValue.semi_major_axis
                        }
                    }
                }
                return decount;
            }, {});
            let hh = []
            for (const property in data["decountVal"]) {
                hh.push({ 'year': property, 'value': data["decountVal"][property] / data["decountNb"][property] })
            }
            setItems(hh)
        });
    }, [])


    return (

        <ResponsiveContainer aspect={2.5}>
            <BarChart data={items}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis ticks={[0, 1, 2, 3, 4]} />
                <Tooltip />
                {/* <Legend /> */}
                <Bar name="(imaging excleu)moyenne des distances à l'étoile en UA des planètes découvertes" dataKey="value" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>

    )


}

export function Graph_annee_distance_etoile_depuis_terre() {

    const [items, setItems] = useState<any[]>([0]);//l'état initial doit être un array ne contenant pas d'objet


    useEffect(() => {
        chercheData().then((tt) => {

            const gg = Object.values(tt)
            const sumOfAges = gg.reduce((decount, currentValue) => {
                if (currentValue.star_distance !== null && currentValue.discovered !== null) {

                    if (!Object.keys(decount).includes(currentValue.discovered)) {
                        decount[currentValue.discovered] = currentValue.star_distance;
                    } else {
                        // decount[currentValue.discovered] = decount[currentValue.discovered] + currentValue.semi_major_axis;
                        decount[currentValue.discovered] = decount[currentValue.discovered] > currentValue.star_distance ? decount[currentValue.discovered] : currentValue.star_distance
                    }
                }
                return decount;
            }, {});
            let hh = []
            for (const property in sumOfAges) {
                hh.push({ 'year': property, 'value': sumOfAges[property] })
            }
            setItems(hh)
        });
    }, [])


    return (


        <BarChart data={items}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis name="star distance" />
            {/* <Tooltip /> */}
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
        </BarChart>

    )


}
