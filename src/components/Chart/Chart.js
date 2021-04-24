import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './chart.css'
class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'country'
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,


                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />




            </div>
        )
    }
}
export default Chart;