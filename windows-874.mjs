/*! https://mths.be/windows-874 v3.0.4 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[129, 1],
	[130, 2],
	[131, 3],
	[132, 4],
	[134, 6],
	[135, 7],
	[136, 8],
	[137, 9],
	[138, 10],
	[139, 11],
	[140, 12],
	[141, 13],
	[142, 14],
	[143, 15],
	[144, 16],
	[152, 24],
	[153, 25],
	[154, 26],
	[155, 27],
	[156, 28],
	[157, 29],
	[158, 30],
	[159, 31],
	[160, 32],
	[3585, 33],
	[3586, 34],
	[3587, 35],
	[3588, 36],
	[3589, 37],
	[3590, 38],
	[3591, 39],
	[3592, 40],
	[3593, 41],
	[3594, 42],
	[3595, 43],
	[3596, 44],
	[3597, 45],
	[3598, 46],
	[3599, 47],
	[3600, 48],
	[3601, 49],
	[3602, 50],
	[3603, 51],
	[3604, 52],
	[3605, 53],
	[3606, 54],
	[3607, 55],
	[3608, 56],
	[3609, 57],
	[3610, 58],
	[3611, 59],
	[3612, 60],
	[3613, 61],
	[3614, 62],
	[3615, 63],
	[3616, 64],
	[3617, 65],
	[3618, 66],
	[3619, 67],
	[3620, 68],
	[3621, 69],
	[3622, 70],
	[3623, 71],
	[3624, 72],
	[3625, 73],
	[3626, 74],
	[3627, 75],
	[3628, 76],
	[3629, 77],
	[3630, 78],
	[3631, 79],
	[3632, 80],
	[3633, 81],
	[3634, 82],
	[3635, 83],
	[3636, 84],
	[3637, 85],
	[3638, 86],
	[3639, 87],
	[3640, 88],
	[3641, 89],
	[3642, 90],
	[3647, 95],
	[3648, 96],
	[3649, 97],
	[3650, 98],
	[3651, 99],
	[3652, 100],
	[3653, 101],
	[3654, 102],
	[3655, 103],
	[3656, 104],
	[3657, 105],
	[3658, 106],
	[3659, 107],
	[3660, 108],
	[3661, 109],
	[3662, 110],
	[3663, 111],
	[3664, 112],
	[3665, 113],
	[3666, 114],
	[3667, 115],
	[3668, 116],
	[3669, 117],
	[3670, 118],
	[3671, 119],
	[3672, 120],
	[3673, 121],
	[3674, 122],
	[3675, 123],
	[8211, 22],
	[8212, 23],
	[8216, 17],
	[8217, 18],
	[8220, 19],
	[8221, 20],
	[8226, 21],
	[8230, 5],
	[8364, 0]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\u20AC'],
	[1, '\x81'],
	[2, '\x82'],
	[3, '\x83'],
	[4, '\x84'],
	[5, '\u2026'],
	[6, '\x86'],
	[7, '\x87'],
	[8, '\x88'],
	[9, '\x89'],
	[10, '\x8A'],
	[11, '\x8B'],
	[12, '\x8C'],
	[13, '\x8D'],
	[14, '\x8E'],
	[15, '\x8F'],
	[16, '\x90'],
	[17, '\u2018'],
	[18, '\u2019'],
	[19, '\u201C'],
	[20, '\u201D'],
	[21, '\u2022'],
	[22, '\u2013'],
	[23, '\u2014'],
	[24, '\x98'],
	[25, '\x99'],
	[26, '\x9A'],
	[27, '\x9B'],
	[28, '\x9C'],
	[29, '\x9D'],
	[30, '\x9E'],
	[31, '\x9F'],
	[32, '\xA0'],
	[33, '\u0E01'],
	[34, '\u0E02'],
	[35, '\u0E03'],
	[36, '\u0E04'],
	[37, '\u0E05'],
	[38, '\u0E06'],
	[39, '\u0E07'],
	[40, '\u0E08'],
	[41, '\u0E09'],
	[42, '\u0E0A'],
	[43, '\u0E0B'],
	[44, '\u0E0C'],
	[45, '\u0E0D'],
	[46, '\u0E0E'],
	[47, '\u0E0F'],
	[48, '\u0E10'],
	[49, '\u0E11'],
	[50, '\u0E12'],
	[51, '\u0E13'],
	[52, '\u0E14'],
	[53, '\u0E15'],
	[54, '\u0E16'],
	[55, '\u0E17'],
	[56, '\u0E18'],
	[57, '\u0E19'],
	[58, '\u0E1A'],
	[59, '\u0E1B'],
	[60, '\u0E1C'],
	[61, '\u0E1D'],
	[62, '\u0E1E'],
	[63, '\u0E1F'],
	[64, '\u0E20'],
	[65, '\u0E21'],
	[66, '\u0E22'],
	[67, '\u0E23'],
	[68, '\u0E24'],
	[69, '\u0E25'],
	[70, '\u0E26'],
	[71, '\u0E27'],
	[72, '\u0E28'],
	[73, '\u0E29'],
	[74, '\u0E2A'],
	[75, '\u0E2B'],
	[76, '\u0E2C'],
	[77, '\u0E2D'],
	[78, '\u0E2E'],
	[79, '\u0E2F'],
	[80, '\u0E30'],
	[81, '\u0E31'],
	[82, '\u0E32'],
	[83, '\u0E33'],
	[84, '\u0E34'],
	[85, '\u0E35'],
	[86, '\u0E36'],
	[87, '\u0E37'],
	[88, '\u0E38'],
	[89, '\u0E39'],
	[90, '\u0E3A'],
	[95, '\u0E3F'],
	[96, '\u0E40'],
	[97, '\u0E41'],
	[98, '\u0E42'],
	[99, '\u0E43'],
	[100, '\u0E44'],
	[101, '\u0E45'],
	[102, '\u0E46'],
	[103, '\u0E47'],
	[104, '\u0E48'],
	[105, '\u0E49'],
	[106, '\u0E4A'],
	[107, '\u0E4B'],
	[108, '\u0E4C'],
	[109, '\u0E4D'],
	[110, '\u0E4E'],
	[111, '\u0E4F'],
	[112, '\u0E50'],
	[113, '\u0E51'],
	[114, '\u0E52'],
	[115, '\u0E53'],
	[116, '\u0E54'],
	[117, '\u0E55'],
	[118, '\u0E56'],
	[119, '\u0E57'],
	[120, '\u0E58'],
	[121, '\u0E59'],
	[122, '\u0E5A'],
	[123, '\u0E5B']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// Support `fatal` (default) and `replacement` error modes.
	if (mode !== 'fatal' && mode !== 'replacement') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'dos-874',
	'iso-8859-11',
	'iso8859-11',
	'iso885911',
	'tis-620',
	'windows-874'
];
