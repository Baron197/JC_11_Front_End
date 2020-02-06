import React from 'react';
import axios from 'axios';
import { API_URL_1 } from '../helpers/apiurl';

class Category extends React.Component {
    state = { listCategory: [], addNamaCategory: '', addParentId: 0 }

    componentDidMount() {
       this.getListCategory()
    }

    getListCategory = () => {
        axios.get(API_URL_1 + '/categories', {
            params: {
                anak: ['test','kacrut']
            }
        })
        .then((res) => {
            console.log(res.data)
            this.setState({ 
                listCategory: res.data,
                addNamaCategory: '',
                addParentId: 0
            })
        }).catch((err) => {
            console.log(err.response)
        })
    }

    onChangeSelectParentId = (e) => {
        console.log(e.target.value)
        this.setState({ addParentId: parseInt(e.target.value) })
    }

    onButtonAddClick = () => {
        var body = {
            category: this.state.addNamaCategory
        }
        if (this.state.addParentId !== 0) {
            body.parentId = this.state.addParentId
        }

        axios.post(API_URL_1 + '/categories', body, {
            params: body
        }).then((res) => {
            console.log(res.data)
            this.getListCategory()
        }).catch((err) => {
            console.log(err.response.data)
        })
    }

    onBtnDeleteClick = async (categoryId) => {
        try {
            if(window.confirm('Are you sure to delete?')) {
                var res = await axios.delete(API_URL_1 + `/categories/${categoryId}`)
                console.log(res.data)
                this.getListCategory()
            }    
        } catch(err) {
            console.log(err.response.data)
        }
    }

    renderListCategory = () => {
        return this.state.listCategory.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.category}</td>
                    <td>{item.parentId}</td>
                    <td>
                        <input type="button" value="Delete" onClick={() => this.onBtnDeleteClick(item.id)} />
                    </td>
                </tr>
            )
        })
    }
    
    renderListPilihanParentCat = () => {
        return this.state.listCategory.map((item) => {
            return (
                <option value={item.id}>{item.category}</option>
            )
        })
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Parent Category</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {this.renderListCategory()}
                </tbody>
                <tfoot>
                    <tr>
                        <td />
                        <td>
                            <input 
                                type="text" 
                                value={this.state.addNamaCategory}
                                placeholder="Nama Category"
                                onChange={(e) => this.setState({ addNamaCategory: e.target.value })}
                            />
                        </td>
                        <td>
                            <select 
                                value={this.state.addParentId}
                                onChange={this.onChangeSelectParentId}
                            >
                                <option value={0}>-- Pilih Category --</option>
                                {this.renderListPilihanParentCat()}
                            </select>
                        </td>
                        <td>
                            <input type="button" value="Add" onClick={this.onButtonAddClick} />
                        </td>
                    </tr>
                </tfoot>
            </table>
        )
    }
}

export default Category;