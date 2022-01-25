import { w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

function formatTime(dt) {
	const myDate = new Date(dt);
	// console.log(myDate);
	// ;
	return myDate;
}

// function formatPrice(price) {
// 	return `${price.toFixed()}`;
// }

export default function Login() {
	const [current, setCurrent] = useState(null);
	useEffect(() => {
		const client = new W3CWebSocket(
			'wss://stream.tradingeconomics.com/?client=guest:guest'
		);
		client.onopen = function (e) {
			console.log('Connection established!');
			client.send('{"topic": "subscribe", "to": "EURUSD:CUR"}');
			client.onmessage = function (e) {
				const next = JSON.parse(e.data);
				console.log(e);
				console.log('e', next.price);
				setCurrent(next);
			};
		};

		return () => {
			client.close();
		};
	}, []);

	return (
		<div>
			{current && (
				<h4 style={{ color: 'black', font: 'small-caption' }}>
					{' '}
					{formatTime(current.dt).toString()}
				</h4>
			)}
			<Marquee>
				{current && (
					<h3
						style={{
							color: 'red',
							fontStyle: 'bold',
							fontWeight: '1200',
						}}
					>
						EUR/USD ${current.price}
					</h3>
				)}
			</Marquee>
		</div>
	);
}
