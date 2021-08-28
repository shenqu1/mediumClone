import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {ArticleFormModule} from '../shared/modules/articleForm/articleForm.module'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {EditArticleCompopnent} from './components/editArticle/editArticle.component'
import {EditArticleService} from './services/editArticle.service'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {UpdateArticleEffect} from './store/effects/updateArticle.effect'
import {reducers} from './store/reducers'

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleCompopnent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule,
  ],
  declarations: [EditArticleCompopnent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
