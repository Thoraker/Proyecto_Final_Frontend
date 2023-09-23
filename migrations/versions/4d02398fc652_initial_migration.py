"""Initial migration.

Revision ID: 4d02398fc652
Revises: 
Create Date: 2023-09-15 22:26:36.039793

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4d02398fc652'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pets',
    sa.Column('id', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=256), nullable=True),
    sa.Column('specie', sa.Integer(), nullable=True),
    sa.Column('age', sa.String(length=256), nullable=True),
    sa.Column('size', sa.Integer(), nullable=True),
    sa.Column('need_backyard', sa.Boolean(), nullable=True),
    sa.Column('for_adoption', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.String(length=256), nullable=False),
    sa.Column('public_id', sa.String(length=256), nullable=False),
    sa.Column('user_name', sa.String(length=256), nullable=False),
    sa.Column('email', sa.String(length=256), nullable=False),
    sa.Column('password', sa.String(length=256), nullable=False),
    sa.Column('first_name', sa.String(length=256), nullable=False),
    sa.Column('last_name', sa.String(length=256), nullable=False),
    sa.Column('avatar', sa.String(length=256), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('public_id'),
    sa.UniqueConstraint('user_name')
    )
    op.create_table('addresses',
    sa.Column('id', sa.String(length=256), nullable=False),
    sa.Column('street', sa.String(length=256), nullable=False),
    sa.Column('building_number', sa.String(length=256), nullable=False),
    sa.Column('department_number', sa.String(length=256), nullable=True),
    sa.Column('commune', sa.Integer(), nullable=False),
    sa.Column('region', sa.Integer(), nullable=True),
    sa.Column('has_backyard', sa.Boolean(), nullable=True),
    sa.Column('habitant', sa.String(length=256), nullable=True),
    sa.ForeignKeyConstraint(['habitant'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('owners_pets',
    sa.Column('user_id', sa.String(length=256), nullable=True),
    sa.Column('pet_id', sa.String(length=256), nullable=True),
    sa.Column('time_stamp', sa.DateTime(timezone=True), nullable=True),
    sa.ForeignKeyConstraint(['pet_id'], ['pets.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], )
    )
    op.create_table('posts',
    sa.Column('id', sa.String(length=256), nullable=False),
    sa.Column('reference_post_id', sa.String(length=256), nullable=True),
    sa.Column('message', sa.String(length=512), nullable=False),
    sa.Column('pet_id', sa.String(length=256), nullable=True),
    sa.Column('user_id', sa.String(length=256), nullable=True),
    sa.ForeignKeyConstraint(['pet_id'], ['pets.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('photos', schema=None) as batch_op:
        batch_op.create_foreign_key(None, 'pets', ['pet_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('photos', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')

    op.drop_table('posts')
    op.drop_table('owners_pets')
    op.drop_table('addresses')
    op.drop_table('users')
    op.drop_table('pets')
    # ### end Alembic commands ###