/**
 * Copyright (C) 2023 Geraldi Sutanto
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the
 * GNU Affero General Public License as published by the Free Software Foundation version 3 of the
 * License.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this program.
 * If not, see <https://www.gnu.org/licenses/>.
 */

/** @type {import('@babel/core').ConfigFunction} */
module.exports = () => {
	return {
		plugins: [
			['@babel/plugin-proposal-async-do-expressions'],
			['@babel/plugin-proposal-do-expressions'],
			['@babel/plugin-proposal-function-bind'],
			['@babel/plugin-proposal-partial-application'],
			['@babel/plugin-proposal-pipeline-operator', { topicToken: '^' }],
			['@babel/plugin-proposal-record-and-tuple'],
			['@babel/plugin-transform-runtime', { corejs: 3, version: '^7.23.4' }],
		],
	}
}
