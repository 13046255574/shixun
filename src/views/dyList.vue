<template>
    <div class="bigDiv">
        <span class="title"><i class="el-icon-edit"></i>动态列表</span>
        <el-divider content-position="left"></el-divider>
        <el-table
                :data="dyList"
                style="width: 100%"
                :header-cell-style="{ textAlign: 'center' }"
                :cell-style="{ textAlign: 'center' }"
                stripe
                border
        >
            <el-table-column prop="nickName" label="发布者昵称" width="180">
            </el-table-column>
            <el-table-column label="发布者头像">
                <template slot-scope="scope">
                    <el-popover placement="top-start" title="" trigger="hover">
                        <img
                                :src="scope.row.avatarUrl"
                                alt=""
                                style="width: 150px;height: 150px"
                        />
                        <img
                                slot="reference"
                                :src="scope.row.avatarUrl"
                                style="width: 30px;height: 30px"
                        />
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column prop="dynamicContent" label="动态内容" width="180">
            </el-table-column>
            <el-table-column label="动态图片">
                <template slot-scope="scope">
                    <el-image
                            v-for="(item, index) in scope.row.listImage"
                            :key="index"
                            style="width: 30px; height: 30px"
                            :src="item"
                            :preview-src-list="[item]"
                    ></el-image>
                </template>
            </el-table-column>
            <el-table-column prop="commentTotal" label="评论数" width="180">
            </el-table-column>
            <el-table-column prop="likeTotal" label="点赞数" width="180">
            </el-table-column>
            <el-table-column prop="passPublishTime" label="发布日期" width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"-->
                    <!--&gt;编辑</el-button-->
                    <!--&gt;-->
                    <el-popconfirm
                            title="这是一段内容确定删除吗？"
                            @confirm="confirm(scope.row)">
                    <el-button
                            slot="reference"
                            size="mini"
                            type="danger"
                    >删除</el-button>
                    </el-popconfirm>
                </template>
            </el-table-column>
        </el-table>
        <div class="page1">
            <el-pagination
                    :page-size=6
                    @current-change="currentChange"
                    background
                    layout="prev, pager, next"
                    :total=Number(this.amount)>
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import http from '../http/userHttp'
    export default {
        data(){
            return{
                dyList:[],
                amount:'',
                page:''
            }
        },
        methods:{
            async delDy(id){
              let  delData=  await http.delDynamic(id);
              this.$message.success(delData.data.msg)
                this.getAllDyList(this.page)
            },
            confirm(e){
                console.log(e.dynamicId);
                // 删除动态
                this.delDy(e.dynamicId);

            },
            async getAllDyList(page){
                let dyList = await http.findDynamic(page);
                this.amount = dyList.data.amount;
                console.log(this.amount);
                this.dyList=dyList.data.result;
                console.log(dyList);
            },
            currentChange(page){
                this.getAllDyList(page);
                this.page=page;
            }
        },
        mounted(){
            this.getAllDyList(1);
        }
    }
</script>

<style scoped>

.page1 {
    display: flex;
    flex-direction: row-reverse;
    margin: 20px 40px;
}
.title {
    font-weight: bold;
    padding: 10px;
}

i {
    margin-right: 10px;
}

</style>
