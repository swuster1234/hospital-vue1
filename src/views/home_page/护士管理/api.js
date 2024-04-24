// api.js
const baseURL = 'https://3891e3bd.r12.cpolar.top'; // 后端API的基础URL

// 获取全部数据
export const getAllData = () => {
    return fetch(`${baseURL}/nurseInfo/list`)
        .then(response => response.json())
        .catch(error => console.error('Error fetching data:', error));
};

// 新增数据
export const addData = (newData) => {
    return fetch(`${baseURL}/nurseInfo/list`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
    })
        .catch(error => console.error('Error adding data:', error));
};

// 删除数据
export const deleteData = (id) => {
    return fetch(`${baseURL}/nurseInfo/search/${id}`, {
        method: 'DELETE',
    })
        .catch(error => console.error('Error deleting data:', error));
};

// 更新数据
export const updateData = (id, updatedData) => {
    return fetch(`${baseURL}/data/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    })
        .catch(error => console.error('Error updating data:', error));
};

// 导出数据
export const exportData = () => {
    return fetch(`${baseURL}/nurseInfo/excelExport`)
        .then(response => response.blob())
        .catch(error => console.error('Error exporting data:', error));
};
